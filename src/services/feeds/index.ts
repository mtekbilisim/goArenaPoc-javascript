import { API } from "API";
import { Feed } from "models/feed";
import { sleep } from "utils";

export async function GetFeeds() {
  return await API.get<Feed[]>("feeds/admin");
}
