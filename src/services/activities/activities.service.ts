import { httpClient } from "@/lib";
import { IActivity } from "./activities.types";
import { CreateActivityDto } from "./dto";

export const ActivitiesService = {
  getCourseActivities: async (courseId: string): Promise<IActivity[]> => {
    try {
      const { data } = await httpClient.get<IActivity[]>(
        `/courses/${courseId}/activities`
      );

      return data;
    } catch (error) {
      return [];
    }
  },

  createCourseActivity: async (
    courseId: string,
    activity: CreateActivityDto
  ): Promise<IActivity | null> => {
    try {
      const { data } = await httpClient.post<IActivity>(
        `/courses/${courseId}/activities`,
        activity
      );

      return data;
    } catch (error) {
      return null;
    }
  },
};
