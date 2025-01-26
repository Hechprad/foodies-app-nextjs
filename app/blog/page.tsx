import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Blog Page</h1>
        <p>This is the blog page</p>
        <Link href={`/blog/post-1`}>first post</Link>
        <Link href={`/blog/post-2`}>second post</Link>
        <Link href="/">home</Link>
      </div>
    </main>
  );
}
