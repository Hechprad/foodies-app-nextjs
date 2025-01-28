import Link from "next/link";

export default function MealsPAge() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link href="/meals/share">Share page</Link>
          <Link href="/">Home</Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link href="/meals/meal-1">Meal 1</Link>
          <Link href="/meals/meal-2">Meal 2</Link>
        </div>
      </div>
    </main>
  );
}
