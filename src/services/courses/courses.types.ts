import { BaseEntity } from "@/types";

export interface ICourse extends BaseEntity {
  title: string;
  description: string;
  published: boolean;
  userId: string;
}
