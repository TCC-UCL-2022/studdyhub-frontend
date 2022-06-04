import { BaseEntity } from "@/types";
import { ICourse } from "../courses";
import { IUser } from "../user";

export interface IEnrollment extends BaseEntity {
  course: ICourse;
  user: IUser;
}
