import sql from "better-sqlite3";

import { type Meal } from "@/components/MealsGrid/types";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare<[], Meal>("SELECT * FROM meals").all();
}
