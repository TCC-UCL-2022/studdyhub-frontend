import { httpClient } from "@/lib";
import { ICourse } from "./courses.types";
import {
  CreateCourseDto,
  GetCoursesRequestDto,
  GetCoursesResponseDto,
  UpdateCourseDto,
} from "./dto";

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

  getCoursesByUserId: async function (
    userId: string
  ): Promise<GetCoursesResponseDto> {
    try {
      if (this.count) {
        throw new Error("This function was called more than once");
      }

      this.count++;
      const { data } = await httpClient.get<GetCoursesResponseDto>(
        `/courses/user/${userId}`
      );

      this.count = 0;
      return data;
    } catch (error) {
      this.count = 0;
      return {
        items: [],
        count: 0,
      };
    }
  },

  updateCoursePublishStatus: async (
    courseId: string,
    published: boolean
  ): Promise<Boolean | null> => {
    try {
      const { data } = await httpClient.patch<ICourse>(`/courses/${courseId}`, {
        published,
      });

      return !!data;
    } catch (error) {
      return null;
    }
  },

  deleteCourse: async (courseId: string): Promise<boolean> => {
    try {
      await httpClient.delete(`/courses/${courseId}`);

      return true;
    } catch (error) {
      return false;
    }
  },

  getCourseById: async function (courseId: string): Promise<ICourse | null> {
    try {
      if (this.count) {
        throw new Error("This function was called more than once");
      }

      this.count++;
      const { data } = await httpClient.get<ICourse>(`/courses/${courseId}`);

      this.count = 0;
      return data;
    } catch (error) {
      this.count = 0;
      return null;
    }
  },

  getAllCourses: async function ({
    loadUser = true,
    published = true,
    query,
  }: GetCoursesRequestDto): Promise<GetCoursesResponseDto> {
    const { data } = await httpClient.get<GetCoursesResponseDto>("/courses", {
      params: {
        loadUser,
        published,
        query,
      },
    });

    return data;
  },
};
