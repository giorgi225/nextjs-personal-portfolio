// Types
import type { Menu } from "@/types/components/navlist.types";
// Enums
import { Route } from "@/enums/routes.enum";

const PagesMenu: Menu[] = [
  {
    to: Route.HOME,
    text: "home",
    icon: "solar:home-2-outline",
  },
  {
    to: Route.ABOUT,
    text: "about",
    icon: "solar:user-linear",
  },
  {
    to: Route.PROJECTS,
    text: "projects",
    icon: "solar:code-linear",
  },
  {
    to: Route.SERVICES,
    text: "services",
    icon: "hugeicons:computer",
  },
  {
    to: Route.RESUME,
    text: "resume",
    icon: "fluent:hat-graduation-16-regular",
  },
];

const ContactMenu: Menu[] = [
  // {
  //   text: "contact_form",
  //   icon: "fluent:chat-20-regular",
  //   openModal: "openContactModal",
  // },
  {
    text: "gigi.shalamberidze2022@gmail.com",
    icon: "mage:email",
    secondIcon: "solar:copy-outline",
    copyFun: "copyEmail",
  },
  {
    text: "+995 574 17 51 88",
    icon: "solar:phone-rounded-outline",
    secondIcon: "solar:copy-outline",
    copyFun: "copyPhone",
  },
];

const SocialPlatformMenu: Menu[] = [
  {
    text: "Facebook",
    link: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    icon: "hugeicons:facebook-01",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Dribbble",
    link: process.env.NEXT_PUBLIC_DRIBBBLE_URL || "",
    icon: "hugeicons:dribbble",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    icon: "hugeicons:github",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    icon: "hugeicons:linkedin-01",
    secondIcon: "ion:open-outline",
  },
];

export { PagesMenu, ContactMenu, SocialPlatformMenu };
