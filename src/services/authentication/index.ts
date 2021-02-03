import { API } from "API";
import axios from "axios";
import { Login as LoginModel, Register as RegisterModel, Token, User } from "models/user";

export async function Login(user: LoginModel) {
  return await API.post<Token>("authentication/token", user);
}

export async function Register(user: RegisterModel) {
  return API.post<User>("authentication/signin", user);
}

export async function GetProfile() {
  return API.get<User>("authentication/me");
}
