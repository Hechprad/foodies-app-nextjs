import Link from "next/link";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params: { slug } }: BlogPostParams) {
  return (
    <main>
      <h1>Title: {slug}</h1>
      <p>content</p>
      <Link href="/blog">back</Link>
    </main>
  );
}
