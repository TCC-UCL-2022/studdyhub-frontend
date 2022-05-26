export enum ActivityType {
  VIDEO = "video",
  EXERCISE = "exercise",
  ARTICLE = "article",
}

export interface IActivity {
  title: string;
  description: string;
  link: string;
  type: ActivityType;
}
