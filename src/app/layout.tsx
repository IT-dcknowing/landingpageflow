import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Suite Flow — Toute l'expertise d'un cabinet dans une seule suite",
  description:
    "Conçue pour les réalités des PME ivoiriennes. Une seule saisie. Nos 5 logiciels interconnectés s'occupent du reste.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-ink antialiased">
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
