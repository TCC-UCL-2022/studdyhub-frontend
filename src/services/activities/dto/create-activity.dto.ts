import { ActivityType } from "../activities.types";

export interface CreateActivityDto {
  title: string;
  description?: string;
  content: string;
  type: ActivityType;
}
