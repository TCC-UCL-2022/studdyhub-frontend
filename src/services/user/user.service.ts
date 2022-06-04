import { httpClient } from "@/lib";
import { CreateUserDto } from "./dto";
import { IUser } from "./user.types";

export const UserService = {
  getUser: async (cognitoId: string): Promise<IUser | null> => {
    try {
      const { data } = await httpClient.get<IUser>(`/users/${cognitoId}`);

      return data;
    } catch (error) {
      return null;
    }
  },

  createUser: async (user: CreateUserDto): Promise<IUser | null> => {
    try {
      const { data } = await httpClient.post<IUser>("/users", user);

      return data;
    } catch (error) {
      return null;
    }
  },
};
