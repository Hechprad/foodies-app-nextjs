import Link from "next/link";
import Image from "next/image";

import classes from "./index.module.css";

import { type Meal } from "@/components/MealsGrid/types";

type MealItemProps = {
  meal: Omit<Meal, "id" | "creator_email" | "instructions">;
};

export default function MealItem({
  meal: { creator, image, slug, summary, title },
}: MealItemProps) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} sizes="15rem" fill priority />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
