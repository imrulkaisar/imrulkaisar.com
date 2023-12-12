import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imrul Kaisar - Frontend Web Developer",
  description:
    "Front-end dev crafting seamless experiences with React, TailwindCSS. Eager to dive into Express.js, Next.js, and MongoDB on the backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
