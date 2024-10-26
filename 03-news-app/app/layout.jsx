import { Inter } from "next/font/google";
import "@/static/css/globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next - News App",
  description: "News App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto py-5">{children}</div>
      </body>
    </html>
  );
}
