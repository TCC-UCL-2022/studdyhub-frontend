import { Roles } from "@/enums";
import { BaseEntity } from "@/types";
import { CognitoUserAmplify } from "@aws-amplify/ui-react/node_modules/@aws-amplify/ui";

export interface IUser extends BaseEntity {
  cognitoId: string;
  name: string;
  email: string;
  role: Roles;
}

export interface ICognitoUser extends CognitoUserAmplify {}
