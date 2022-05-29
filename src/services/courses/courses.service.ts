import { httpClient } from "@/lib";
import { ICourse } from "./courses.types";
import { CreateCourseDto, GetCoursesResponseDto, UpdateCourseDto } from "./dto";

export const CourseService = {
  count: 0,

  createCourse: async (course: CreateCourseDto): Promise<ICourse | null> => {
    try {
      const { data } = await httpClient.post<ICourse>("/courses", course);

      return data;
    } catch (error) {
      return null;
    }
  },

  updateCourse: async (
    courseId: string,
    course: Partial<UpdateCourseDto>
  ): Promise<ICourse | null> => {
    try {
      const { data } = await httpClient.patch<ICourse>(
        `/courses/${courseId}`,
        course
      );

      return data;
    } catch (error) {
      return null;
    }
  },

  getCourseByUserId: async function (
    userId: string,
    published?: boolean
  ): Promise<GetCoursesResponseDto> {
    try {
      if (this.count) {
        throw new Error("This function was called more than once");
      }

      this.count++;
      const { data } = await httpClient.get<GetCoursesResponseDto>("/courses", {
        params: {
          userId,
          published,
        },
      });

      this.count = 0;
      return data;
    } catch (error) {
      return {
        items: [],
        count: 0,
      };
    }
  },
};
