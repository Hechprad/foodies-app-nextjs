"use server";

import { redirect } from "next/navigation";

import { Meal } from "@/components/MealsGrid/types";
import { saveMeal } from "@/lib/meals";

export async function shareMealAction(formData: FormData) {
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

  const slugPath = await saveMeal(meal);

  redirect(`/meals/${slugPath}`);
}
