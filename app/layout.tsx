import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ShoppingCart } from "@/components/ShoppingCart";

export const metadata: Metadata = {
  title: "Périphérie Le Mag",
  description: "Site officiel de Périphérie Le Mag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="debug-screens flex min-h-screen flex-col bg-white font-abcsocial">
        {/* LOGO HAUT */}
        <div
          id="logo-haut-gauche"
          className="fixed left-4 top-5 z-50 hidden w-16 mix-blend-difference invert sm:inline"
        >
          <img
            src="images/peripherie_logotype-variable_milieu_noir.png"
            alt="logo"
            className="-translate-x-1 -rotate-90 pt-2"
          />
          <Link
            href="/"
            className="absolute top-0  h-full w-1/3 bg-opacity-0"
          ></Link>
          <Link
            href="/"
            className="absolute top-0 h-1/3 w-full bg-opacity-0"
          ></Link>
        </div>
        {/* LOGO BAS */}
        <div
          id="logo-bas-droite"
          className="fixed bottom-5 right-4 z-50 hidden w-16 mix-blend-difference invert sm:inline"
        >
          <img
            src="images/peripherie_logotype-variable_milieu_noir.png"
            alt="logo"
            className="  -translate-x-1 rotate-90 pb-2"
          />
          <Link
            href="/"
            className="absolute right-0 top-0  h-full w-1/3 bg-opacity-0"
          ></Link>
          <Link
            href="/"
            className="absolute bottom-0  h-1/3 w-full bg-opacity-0"
          ></Link>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
