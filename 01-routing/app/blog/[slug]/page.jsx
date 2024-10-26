import Link from "next/link";

import Header from "@/components/header";

const BlogDetail = ({ params }) => {
  return (
    <div>
      <Header />

      <Link href="/">Home</Link>

      <h1>Blog List</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogDetail;
