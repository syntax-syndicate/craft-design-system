import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Balancer from "react-wrap-balancer";
import Link from "next/link";

import "./globals.css";
import "@/components/craft/craft.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container, Section } from "@/components/craft";
import { Toaster } from "@/components/ui/sonner";
import { Copy } from "@/components/copy";
import { Github } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craft Design System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <Section>
      <Container>
        <div className="flex gap-4 justify-between">
          <Link href="/" className="text-4xl block mb-8">
            ✴︎
          </Link>
          <div className="flex gap-2">
            <a
              className="h-9 w-9 relative flex items-center justify-center border"
              href="https://github.com/brijr/craft"
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </a>
            <ThemeToggle />
          </div>
        </div>
        <h1 className="text-xl font-medium mb-2">Craft Design System</h1>
        <p className="craft text-muted-foreground max-w-prose">
          <Balancer>
            Craft is an open-source, minimalist, typography-first design system
            for building content sites and user interfaces.
          </Balancer>
        </p>
        <Copy text="npx craft-ds@latest init" />
        <div className="my-8 grid gap-2">
          <Link className="hover:underline underline-offset-4" href="/start">
            + Get Started with Craft
          </Link>
          <a
            className="hover:underline underline-offset-4"
            href="https://www.npmjs.com/package/craft-ds"
          >
            + View on npm
          </a>
          <Link className="hover:underline underline-offset-4" href="/example">
            + View an Article Example
          </Link>
        </div>
      </Container>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section>
      <Container className="space-y-2">
        <p>
          Follow on{" "}
          <a
            className="text-foreground underline underline-offset-2"
            href="https://x.com/bridgertower"
          >
            x.com
          </a>{" "}
          for updates.
        </p>
        <p className="text-muted-foreground">
          &copy; 2024 <a href="https://bridger.to">brijr</a>
        </p>
      </Container>
    </Section>
  );
};
