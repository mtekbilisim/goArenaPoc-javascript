import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Feed } from "models/feed";
import * as React from "react";
import FeedCardMedia from "./card-media";
import "./feed-card.less";

interface IFeedCardProps {
  feed: Feed;
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = (props) => {
  const { feed } = props;

  return (
    <Card actions={[<div>Onayla</div>, <div>Sil</div>]} className='feed-card' cover={<FeedCardMedia type={feed.postType} medias={feed.medias} />}>
      <Card.Meta avatar={<Avatar src={feed.user.avatar}>{feed.user.username}</Avatar>} title={feed.user.username} description={feed.title}></Card.Meta>
    </Card>
  );
};

export default React.memo(FeedCard, (prev, next) => prev.feed.id === next.feed.id);
