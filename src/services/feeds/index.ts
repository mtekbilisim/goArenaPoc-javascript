import { API } from "API";
import { Feed, FeedStatusUpdateRequest } from "models/feed";
import { sleep } from "utils";

export async function GetFeeds() {
  return await API.get<Feed[]>("feeds/admin");
}

export async function UpdateFeedStatus(feeds: FeedStatusUpdateRequest[]) {
  return API.put<Feed[]>("feeds/status", feeds);
}
