export interface Feed {
  id: number;
  title: string;
  postType: FeedType;
  likes: number;
  comments: Comment[];
  postDate: string;
  medias: Media[];
  user: FeedUser;
  status: FeedStatus;
  tags: null | [];
}

export interface Media {
  id: number;
  uri: string;
  mimeType: string;
  feedId: number;
  userId: number;
}

export interface Comment {
  id: number;
  comment: string;
  postDate: string;
  user: FeedUser;
  feedId: number;
}

export interface FeedUser {
  username: string;
  avatar: string;
  id: number;
}

export enum FeedStatus {
  DRAFT = "DRAFT",
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  WAITING_APPROVAL = "WAITING_APPROVAL",
}

export enum FeedType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface FeedStatusUpdateRequest extends Feed {
  userId: number;
}
