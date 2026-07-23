import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hariharan Minnal Srinivasan | Site Reliability Engineer",
  description:
    "Portfolio of Hariharan Minnal Srinivasan, a Site Reliability Engineer and Project Lead specializing in cloud platforms, infrastructure automation and operational excellence.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
