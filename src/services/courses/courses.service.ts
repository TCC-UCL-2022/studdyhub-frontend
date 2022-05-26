import { httpClient } from "@/lib";
import { ICourse } from "./courses.types";
import { CreateCourseDto } from "./dto";

export const CourseService = {
  createCourse: async (course: CreateCourseDto): Promise<ICourse | null> => {
    try {
      const { data } = await httpClient.post<ICourse>("/courses", course);

      return data;
    } catch (error) {
      return null;
    }
  },
};
