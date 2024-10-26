import Link from "next/link";

import Header from "@/components/header";

const Home = () => {
  return (
    <div>
      <Header />
      <p>This is the home page.</p>
      <Link href="/about">Go to About Page</Link>
      <Link href="/blog">Go to Blog Page</Link>
    </div>
  );
};

export default Home;
