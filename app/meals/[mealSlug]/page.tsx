import Link from "next/link";

type MealsSlugPage = {
  params: {
    mealSlug: string;
  };
};

export default async function MealDetailsPage({ params }: MealsSlugPage) {
  const meal = await params.mealSlug;

  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meal - {meal} - Details
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link href="/meals">back to meals</Link>
      </div>
    </main>
  );
}
