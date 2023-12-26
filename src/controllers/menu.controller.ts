// Types
import type { Menu } from "@/types/components/navlist.types";
// Enums
import { Route } from "@/enums/routes.enum";

const PagesMenu: Menu[] = [
  {
    to: Route.HOME,
    text: "home",
    icon: "clarity:home-line",
  },
  {
    to: Route.ABOUT,
    text: "about",
    icon: "solar:user-broken",
  },
  {
    to: Route.PROJECTS,
    text: "projects",
    icon: "solar:code-broken",
  },
  {
    to: Route.SERVICES,
    text: "services",
    icon: "carbon:application-web",
  },
  {
    to: Route.RESUME,
    text: "resume",
    icon: "fluent:hat-graduation-20-regular",
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
    icon: "mdi-light:email-open",
    secondIcon: "solar:copy-outline",
    copyFun: "copyEmail",
  },
  {
    text: "+995 574 17 51 88",
    icon: "solar:phone-outline",
    secondIcon: "solar:copy-outline",
    copyFun: "copyPhone",
  },
];

const SocialPlatformMenu: Menu[] = [
  {
    text: "Facebook",
    link: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    icon: "brandico:facebook-rect",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Dribbble",
    link: process.env.NEXT_PUBLIC_DRIBBBLE_URL,
    icon: "fa6-brands:square-dribbble",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: "skill-icons:github-dark",
    secondIcon: "ion:open-outline",
  },
  {
    text: "Linkedin",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL, 
    icon: "fa:linkedin-square",
    secondIcon: "ion:open-outline",
  },
];

export { PagesMenu, ContactMenu, SocialPlatformMenu };
export default Menu;
