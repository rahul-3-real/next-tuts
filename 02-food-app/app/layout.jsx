import { Inter } from "next/font/google";

import "@/static/css/globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodies Next App",
  description: "Foodies next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto py-7">{children}</div>
      </body>
    </html>
  );
}
