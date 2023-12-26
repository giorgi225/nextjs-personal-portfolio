export interface ResumeItems {
  title: string;
  text: string;
  date: string;
  present?: boolean;
  description: string;
}
export interface ResumeArr {
  mainTitle: string;
  items: ResumeItems[];
}
