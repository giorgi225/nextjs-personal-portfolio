// Next
import type { ReactNode } from "react";
import { Inter, Montserrat, Poppins } from "next/font/google";

// Styles
import "@/styles/base.css";

import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
