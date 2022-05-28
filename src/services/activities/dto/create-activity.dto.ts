import { ActivityType } from "../activities.types";

export interface CreateActivityDto {
  courseId: string;
  title: string;
  description?: string;
  content: string;
  type: ActivityType;
}
