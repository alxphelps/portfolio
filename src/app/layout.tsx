import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Phelps — Senior DevOps Engineer | AWS, Kubernetes & Terraform",
  description:
    "Portfolio of Alex Phelps — Senior DevOps engineer in Wilmington, NC. AWS, EKS, Terraform, Vault, and CI/CD in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-waves" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[size:56px_56px] bg-grid-fade opacity-[0.2]" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
