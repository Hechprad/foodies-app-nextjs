import MealItem from "@/components/MealsGrid/components/MealItem";

import classes from "./index.module.css";

import { type MealsGridProps } from "./types";

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
