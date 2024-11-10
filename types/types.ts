export type ResumeCardDataType = {
  href: string;
  src: string;
  alt: string;
  type?: "Freelance" | "Contract" | "Full-time";
  title: string;
  sub_title: string;
  start_date: string;
  end_date: string;
};

export type SkillType = {
  skill: string;
  skills: string[];
};

export type ProjectCardType = {
  title: string;
  href: string;
  linkText: string;
  skills: string[];
  src: string;
  alt: string;
};
