import sql from "better-sqlite3";

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
