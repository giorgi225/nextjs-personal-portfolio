export interface SkillsArr {
    programingLanguage: string,
    programingLanguageIcon: string,
}
interface CategoryArr {
    text: string,
    icon: string
}
export interface ProjectsArr {
    title: string,
    category: CategoryArr[],
    image: string,
    link: string,
    skills: SkillsArr[]
}