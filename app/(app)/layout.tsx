import "@/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NaP Developers 💤",
  description: "Created while you 🛌",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-[100svh] max-w-5xl grid grid-rows-layout mx-auto max-sm:items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
