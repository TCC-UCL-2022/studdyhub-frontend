import { IUser } from "./types";

export const UserService = {
  getUser: async (_cognitoId: string): Promise<IUser | null> => {
    // return {
    //   id: "",
    //   cognitoId: "",
    //   name: "",
    //   email: "",
    //   role: Roles.STUDENT,
    // };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  },

  createUser: async (user: Omit<IUser, "id">): Promise<IUser> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...user,
          id: "",
        });
      }, 1000);
    });
  },
};
