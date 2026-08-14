import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hariharanms.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hariharan Minnal Srinivasan | Senior Site Reliability Engineer",
    template: "%s | Hariharan MS",
  },
  description:
    "Senior Site Reliability Engineer and Project Lead specializing in cloud platforms, Kubernetes, infrastructure automation, observability and operational excellence.",
  keywords: ["Hariharan Minnal Srinivasan", "Site Reliability Engineer", "SRE", "Cloud Automation", "Kubernetes", "Terraform", "Google Cloud", "Chennai"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Hariharan MS Portfolio",
    title: "Hariharan Minnal Srinivasan | Senior Site Reliability Engineer",
    description: "Cloud infrastructure, platform reliability and production automation across GCP, AWS and Azure.",
    images: [{ url: "/hariharan-profile.png", width: 544, height: 765, alt: "Hariharan Minnal Srinivasan" }],
  },
  twitter: {
    card: "summary",
    title: "Hariharan Minnal Srinivasan | Senior Site Reliability Engineer",
    description: "Cloud infrastructure, platform reliability and production automation across GCP, AWS and Azure.",
    images: ["/hariharan-profile.png"],
  },
  robots: { index: true, follow: true },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hariharan Minnal Srinivasan",
    url: siteUrl,
    image: `${siteUrl}/hariharan-profile.png`,
    jobTitle: "Senior Site Reliability Engineer and Project Lead",
    address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
    sameAs: [
      "https://www.linkedin.com/in/hariharan-ms/",
      "https://github.com/harims2801",
      "https://www.credly.com/badges/d18bc837-94ab-468a-8b11-abe466758dd8",
    ],
    knowsAbout: ["Site Reliability Engineering", "Cloud Infrastructure", "Kubernetes", "Terraform", "Production Automation"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
