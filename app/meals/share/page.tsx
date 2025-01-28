import Link from "next/link";

export default function SharePage() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share Meal Page</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link href="/meals">back to meals</Link>
      </div>
    </main>
  );
}
