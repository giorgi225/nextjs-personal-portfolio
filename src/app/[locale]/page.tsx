// Next
import IconBase from "@/components/icon/IconBase";
import { Link } from "@/navigation";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
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
          <h1 className="font-mainBlack text-[48px] leading-[56px] md:text-[6vw] text-black md:max-w-[48vw]  md:leading-[6vw] tracking-[1px]">
            {messages["web_designer"]}{" "}
            <span className="text-stroke-black"> {messages["developer"]}</span>
          </h1>
        </div>
        <div className="flex items-center gap-6 md:mt-6 md:translate-x-[-40px]">
          <div className="w-full hidden md:flex max-w-[67px]">
            <Image
              width="100"
              height="100"
              className="w-full toggle-image"
              src="/images/pointerArrow.svg"
              alt="Pointer-Arrow"
            />
          </div>
          <div className="flex flex-col gap-8 mt-4 md:mt-8">
            <p className="font-mainMedium leading-7 text-base text-black-80 md:max-w-[418px]">
              {messages["welcome_text"]}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={`/shalamberidze_gigi_cv.pdf`}
                download
                className="w-max flex text-sm px-4 gap-2 py-3 bg-grayLight rounded-[8px] font-mainMedium hover:bg-black-80 text-slate-900 hover:text-white hover:shadow-md active:scale-[0.98] active:bg-black transition-all"
              >
                <IconBase
                  className="w-6 h-6 group-hover:text-white"
                  icon={`solar:file-download-linear`}
                />
                <span className="translate-y-[2px]">
                  {messages["download_cv"]}
                </span>
              </a>
              <Link
                href={`https://github.com/giorgi225/nextjs-personal-portfolio`}
                target="_blank"
                className="w-max h-[46px] flex items-center text-sm px-4 gap-2 py-3 rounded-[8px] font-mainMedium hover:text-prett text-slate-900 hover:text-yellow-400 active:scale-[0.98] transition-all"
              >
                <span>
                  {messages["about_me"]}
                </span>
                <IconBase
                  className="w-6 h-6 group-hover:text-white"
                  icon={`solar:arrow-right-linear`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
