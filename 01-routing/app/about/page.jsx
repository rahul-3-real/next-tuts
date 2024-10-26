import Link from "next/link";

import Header from "@/components/header";

const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
