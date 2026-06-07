import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FiiFit Online - Transformare Feminină | Academia Nutrițională",
  description: "Platform premium de transformare feminină. 4500+ femei, 81% rată de succes. Acces 24/7 la 24 lecții + 1040 antrenamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
