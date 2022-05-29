import { ICourse } from "../courses.types";

export interface GetCoursesResponseDto {
  items: ICourse[];
  count: number;
}
