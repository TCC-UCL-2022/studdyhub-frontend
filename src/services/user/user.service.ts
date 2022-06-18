import { httpClient, isHttpClientError } from "@/lib";
import { CreateUserDto } from "./dto";
import { IUser } from "./user.types";

export const UserService = {
  count: 0,

  getUser: async function (cognitoId: string): Promise<IUser | null> {
    try {
      if (this.count) {
        throw new Error("This function was called more than once");
      }

      this.count++;

      const { data } = await httpClient.get<IUser>(`/users/${cognitoId}`);

      this.count = 0;
      return data;
    } catch (error) {
      if (isHttpClientError(error)) {
        if (error.response?.status !== 404) {
          this.count = 0;
        }
      }

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
