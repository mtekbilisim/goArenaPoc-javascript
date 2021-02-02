import { API } from "API";

export async function Login(user: object) {
  return await API.post("login", user);
}
