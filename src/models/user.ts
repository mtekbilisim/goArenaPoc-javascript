export interface User {
  first_name: string;
  id: number;
  last_name: string;
  email: string;
  avatar: string;
  password: string;
  username: string;
  employee_type: UserTypes;
  shopId: 0;
}

export interface Token {
  token_type: string;
  expires_in: number;
  access_token: string;
  scope: string;
  error: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  userName: string;
  userType: UserTypes;
  shopId: number;
}

export enum UserTypes {
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}
