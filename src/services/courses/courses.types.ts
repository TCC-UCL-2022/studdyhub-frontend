import { BaseEntity } from "@/types";
import { IUser } from "../user";

export interface ICourse extends BaseEntity {
  title: string;
  description: string;
  published: boolean;
  user: IUser;
}
