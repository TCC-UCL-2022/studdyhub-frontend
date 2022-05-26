import { httpClient } from "@/lib";
import { IActivity } from "./activities.types";

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
};
