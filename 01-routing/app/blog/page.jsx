import Link from "next/link";

import Header from "@/components/header";

const Blog = () => {
  return (
    <div>
      <Header />
      <h1>Blog</h1>

      <Link href="/">Home</Link>

      <Link href="/blog/post-1">Post 1</Link>
      <Link href="/blog/post-2">Post 2</Link>
    </div>
  );
};

export default Blog;
