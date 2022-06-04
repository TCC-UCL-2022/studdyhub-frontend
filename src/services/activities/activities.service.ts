import { httpClient } from "@/lib";
import { IActivity } from "./activities.types";
import { CreateActivityDto } from "./dto";

export const ActivitiesService = {
  count: 0,
  getCourseActivities: async function (courseId: string): Promise<IActivity[]> {
    try {
      if (this.count) {
        throw new Error("This function was called more than once");
      }

      this.count++;

      const { data } = await httpClient.get<IActivity[]>(
        `/courses/${courseId}/activities`
      );

      this.count = 0;
      return data;
    } catch (error) {
      this.count = 0;
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
