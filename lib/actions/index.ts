"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { Meal } from "@/components/MealsGrid/types";
import { saveMeal } from "@/lib/meals";

function isInvalidText(text?: string | null) {
  return !text || text.trim() === "";
}

export async function shareMealAction(
  prevState: { message: string },
  formData: FormData
) {
  const meal: Omit<Meal, "id" | "image" | "slug"> & {
    image: File;
  } = {
    creator: formData.get("name")?.toString() ?? "",
    creator_email: formData.get("email")?.toString() ?? "",
    image: formData.get("image") as File,
    instructions: formData.get("instructions")?.toString() ?? "",
    summary: formData.get("summary")?.toString() ?? "",
    title: formData.get("title")?.toString() ?? "",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, ...mealFields } = meal;

  const hasError =
    Object.values(mealFields).some((text) => isInvalidText(text)) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0;

  if (hasError) {
    return {
      message: "Invalid input.",
    };
  }

  const slugPath = await saveMeal(meal);
  // NextJs has aggressive caching, so we need to revalidate the path
  revalidatePath("/meals");

  redirect(`/meals/${slugPath}`);
}
