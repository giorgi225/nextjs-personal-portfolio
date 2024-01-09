// Next
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";

// Components
import Layout from "@/components/layout/layout";

// Styles
import "@styles/base.css";

export const metadata: Metadata = {
  title: "Shalamberidze's Portfolio",
  description: "I am Gigi Shalamberidze, Web Developer & Web Designer with 2 years experience from Tbilisi, Georgia",
  keywords: ['developer', 'designer', 'freelancer', 'professional', 'gigi shalamberidze', 'giorgi shalameridze']
};

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
