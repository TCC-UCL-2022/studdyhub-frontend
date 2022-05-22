import { CognitoUserAmplify } from "@aws-amplify/ui-react/node_modules/@aws-amplify/ui";
import { Roles } from "@enums";

export interface IUser {
  id: string;
  cognitoId: string;
  name: string;
  email: string;
  role: Roles;
}

export interface ICognitoUser extends CognitoUserAmplify {}
