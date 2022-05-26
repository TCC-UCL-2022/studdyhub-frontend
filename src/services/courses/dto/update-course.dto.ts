import { CreateCourseDto } from "./create-course.dto";

export interface UpdateCourseDto extends CreateCourseDto {
  published: boolean;
}
