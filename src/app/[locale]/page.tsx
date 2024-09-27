// Next
import IconBase from "@/components/icon/IconBase";
import { Route } from "@/enums/routes.enum";
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
    <div className="flex gap-6 w-full md:px-10 overflow-hidden pt-10 md:pt-20 scale-animation">
      <div className="w-full h-full flex flex-col">
        <div className="flex items-end gap-6">
          <h1 className="font-mainBlack text-[48px] leading-[56px] xl:text-[5vw] text-slate-900 md:max-w-[48vw] xl:leading-[5vw] tracking-[1px]">
            {messages["web_designer"]}
            <span className="text-stroke-black"> {messages["developer"]}</span>
          </h1>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-8 mt-8">
            <div dangerouslySetInnerHTML={{__html: messages["welcome_text"]}} className="font-mainMedium leading-7 text-sm text-slate-900 md:max-w-[800px]"/>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <a
                  href={`/shalamberidze_gigi_cv.pdf`}
                  download
                  className="w-max flex text-sm px-4 gap-2 py-3 bg-teal-50 rounded-[12px] font-mainMedium hover:bg-teal-900 hover:text-white text-teal-900 border border-teal-900 hover:shadow-md active:scale-[0.98] active:bg-teal-900 transition-all"
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
                  href={Route.PROJECTS}
                  className="w-max h-[46px] flex items-center text-sm px-4 gap-2 py-3 rounded-[12px] font-mainMedium hover:text-prett text-slate-900 hover:text-teal-600 active:scale-[0.98] transition-all"
                >
                  <span>{messages["projects"]}</span>
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
    </div>
  );
}
