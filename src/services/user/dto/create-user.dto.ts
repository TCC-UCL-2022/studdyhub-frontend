import { Roles } from "@/enums";

export interface CreateUserDto {
  cognitoId: string;
  name: string;
  email: string;
  role: Roles;
}
