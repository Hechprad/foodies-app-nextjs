import Link from "next/link";

export default function CommunityPage() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Community Page</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
