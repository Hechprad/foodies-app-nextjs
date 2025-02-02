import fs from "node:fs";
import sql from "better-sqlite3";
import { randomUUID } from "crypto";
import slugify from "slugify";
import xss from "xss";

import { type Meal } from "@/components/MealsGrid/types";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock fetch error
  // throw new Error("Loading meals failed.");
  return db.prepare<[], Meal>("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock fetch error
  // throw new Error("Loading meals failed.");
  return db
    .prepare<[string], Meal>("SELECT * FROM meals WHERE slug = ?")
    .get(slug);
}

export async function saveMeal(
  meal: Omit<Meal, "id" | "image" | "slug"> & {
    image: File;
  }
) {
  const slug = slugify(meal.title, { lower: true });
  // Sanitize instructions to prevent XSS attacks
  const instructions = xss(meal.instructions);
  const extension = meal.image ? meal.image.name.split(".").pop() : "";
  const uniqueId = randomUUID();
  const fileName = `${slug}-${uniqueId}.${extension}`;
  // Create a writable stream to save the image in the "public/images" directory
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // Convert the image File object to a Buffer for writing
  const bufferedImage = await meal.image.arrayBuffer();

  // Write the image buffer to the file system
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  const sanitizedMeal: Omit<Meal, "id"> = {
    ...meal,
    slug,
    instructions,
    image: `/images/${fileName}`,
  };

  await db
    .prepare(
      `
    INSERT INTO meals
      (creator, creator_email, image, instructions, slug, summary, title)
      VALUES (
        @creator,
        @creator_email,
        @image,
        @instructions,
        @slug,
        @summary,
        @title
      )`
    )
    .run(sanitizedMeal);

  return slug;
}
