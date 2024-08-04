// Next
import { Link } from "@/navigation";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { locale: string};
}) {
  const { locale } = params;

  return {
    title: "Web Developer & Designer | shalamberidze gigi's portfolio",
    description:
      "I am Gigi Shalamberidze, Web Developer & Web Designer with 4 years experience from Tbilisi, Georgia",
    keywords: [
      "developer",
      "designer",
      "freelancer",
      "professional",
      "shalamberidze",
      "gigi shalameridze",
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en`,
        ka: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/ka`,
      },
    },
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${locale}`,
      type: "website",
      title: "Web Developer & Designer | shalamberidze gigi's portfolio",
      description:
        "I am Gigi Shalamberidze, Web Developer & Web Designer with 4 years experience from Tbilisi, Georgia",
      images: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/profile.png`,
    },
  };
}

export default async function Home() {
  const messages: any = await getMessages();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto,1fr] gap-6 w-full md:px-10 overflow-hidden pt-10 md:pt-20 scale-animation">
      <div className="w-full h-full md:min-w-max">
        <div className="flex items-end gap-6">
          <h1 className="font-mainBlack text-[8vw] md:text-[6vw] text-black md:max-w-[48vw] leading-[9vw] md:leading-[8vw] md:leading-[7vw] tracking-[1px]">
            {messages["web_designer"]}{" "}
            <span className="text-stroke-black">& {messages["developer"]}</span>
          </h1>
        </div>
        <div className="flex items-center gap-6 mt-6 md:translate-x-[-40px]">
          <div className="w-full hidden md:flex max-w-[67px]">
            <Image
              width="100"
              height="100"
              className="w-full toggle-image"
              src="/images/pointerArrow.svg"
              alt="Pointer-Arrow"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mainMedium text-base text-black-80 md:max-w-[418px]">
              {messages["welcome_text"]}
            </p>
            <a href={`/shalamberidze_gigi_cv.pdf`} download className="w-max px-7 py-3 bg-grayLight rounded text-sm font-mainMedium hover:bg-black-80 text-black hover:text-white hover:shadow-md active:scale-[0.98] active:bg-black transition-all">
              {messages["download_cv"]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
