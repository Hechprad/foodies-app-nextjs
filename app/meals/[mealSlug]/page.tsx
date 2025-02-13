import { Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";

import classes from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}): Promise<Metadata | void> {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
    openGraph: {
      images: [meal.image],
    },
  };
}

type MealSlugPage = Readonly<{
  params: Promise<{ mealSlug: string }>;
}>;

export default async function MealDetailsPage({ params }: MealSlugPage) {
  const { mealSlug } = await params;

  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={meal.image}
            alt={meal.title}
            sizes="15rem"
            fill
            priority
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />") ?? "",
          }}
        />
      </main>
    </Suspense>
  );
}
