import { BaseEntity } from "@/types";

export enum ActivityType {
  VIDEO = "video",
  EXERCISE = "exercise",
  ARTICLE = "article",
}

export interface IActivity extends BaseEntity {
  title: string;
  description: string;
  content: string;
  type: ActivityType;
}
