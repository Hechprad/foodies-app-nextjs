"use client";

export default function MealsError({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
      <p>
        Error message:{" "}
        <span style={{ fontWeight: "bold" }}>{error.message}</span>
      </p>
    </main>
  );
}
