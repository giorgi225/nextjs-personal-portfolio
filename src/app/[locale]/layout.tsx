// Next
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";

// Components
import Layout from "@/components/layout/layout";

// Styles
import "@styles/base.css";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return {
    title: "Full-stack Developer | Next.js, React.js, Node.js, Express.js | Gigi Shalamberidze",
    description:
      "I'm Full-Stack Developer with 4 years experience in frontend (HTML, CSS, JavaScript, React) and 2 years in backend (Next.js, Express), building dynamic web apps",
    keywords: [
      "full-stack developer",
      "web developer",
      "frontend developer",
      "backend developer",
      "freelance web developer",
      "professional web designer",
      "JavaScript developer",
      "React.js developer",
      "Next.js expert",
      "Express.js developer",
      "Giorgi Shalamberidze",
      "Gigi Shalamberidze",
      "dynamic web applications",
      "high-performance websites",
    ],
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}`,
      type: "website",
      title: "Full-stack Developer | Next.js, React.js, Node.js, Express.js | Gigi Shalamberidze",
      description:
        "I'm Full-Stack Developer with 4 years experience in frontend (HTML, CSS, JavaScript, React) and 2 years in backend (Next.js, Express), building dynamic web apps",
      keywords: [
        "full-stack developer",
        "web developer",
        "frontend developer",
        "backend developer",
        "freelance web developer",
        "professional web designer",
        "JavaScript developer",
        "React.js developer",
        "Next.js expert",
        "Express.js developer",
        "Giorgi Shalamberidze",
        "Gigi Shalamberidze",
        "dynamic web applications",
        "high-performance websites",
      ],
      images: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/profile.png`,
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="relative w-full md:h-screen lg:p-3">
            <div className="relative w-full h-full flex flex-col-reverse md:flex-col lg:flex-row gap-3 pb-24 md:pb-0">
              <Layout>{children}</Layout>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
