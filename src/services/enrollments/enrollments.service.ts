import { httpClient } from "@/lib";
import { CreateEnrollmentDto } from "./dto";
import { IEnrollment } from "./enrollments.types";

export const EnrollmentsService = {
  count: 0,

  createEnrollment: async (
    enrollment: CreateEnrollmentDto
  ): Promise<Boolean> => {
    try {
      const { data } = await httpClient.post<IEnrollment>(
        "/enrollments",
        enrollment
      );

      return !!data;
    } catch (error) {
      return false;
    }
  },

  async getEnrollments(userId: string): Promise<IEnrollment[]> {
    if (this.count) {
      throw new Error("This function was called more than once");
    }

    this.count++;
    try {
      const { data } = await httpClient.get<IEnrollment[]>(
        `/enrollments/${userId}`
      );

      this.count = 0;
      return data;
    } catch (error) {
      this.count = 0;
      return [];
    }
  },
};
