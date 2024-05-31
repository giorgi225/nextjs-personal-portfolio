export interface SkillsArr {
  programingLanguage: string;
  programingLanguageIcon: string;
}
interface CategoryArr {
  text: string;
  icon: string;
}
export interface ProjectType {
  title: string;
  category: CategoryArr[];
  image: string;
  link: string;
  skills: SkillsArr[];
}
export interface PromiseProjectsArr {
  data: {
    title: string;
    category: CategoryArr[];
    image: string;
    link: string;
    skills: SkillsArr[];
  };
}
