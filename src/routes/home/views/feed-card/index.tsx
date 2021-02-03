import { Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { API } from "API";
import { Feed, FeedStatus, FeedStatusUpdateRequest } from "models/feed";
import * as React from "react";
import { useMutation, useQueryClient } from "react-query";
import { UpdateFeedStatus } from "services/feeds";
import FeedCardMedia from "./card-media";
import "./feed-card.less";

interface IFeedCardProps {
  feed: Feed;
}

const FeedCard: React.FunctionComponent<IFeedCardProps> = (props) => {
  const queryClient = useQueryClient();

  const [loading, setLoading] = React.useState(false);

  const { feed } = props;

  const Approve = async () => {
    setLoading(true);

    try {
      const feeds: FeedStatusUpdateRequest[] = [{ ...feed, userId: feed.user.id, status: FeedStatus.APPROVED }];
      await UpdateFeedStatus(feeds);
      await queryClient.refetchQueries("feeds");
    } catch (error) {
      console.error("Error", error);
    }
    setLoading(false);
  };

  const Decline = async () => {
    setLoading(true);

    try {
      const feeds: FeedStatusUpdateRequest[] = [{ ...feed, userId: feed.user.id, status: FeedStatus.DECLINED }];
      await UpdateFeedStatus(feeds);
      await queryClient.refetchQueries("feeds");
    } catch (error) {
      console.error("Error", error);
    }
    setLoading(false);
  };

  const Actions = [feed.status === FeedStatus.DRAFT || feed.status === FeedStatus.WAITING_APPROVAL ? <div onClick={Approve}>Onayla</div> : feed.status === FeedStatus.DECLINED ? <div onClick={Approve}>Onayla (reddedilmiş)</div> : <div onClick={Decline}>Yayından Kaldır</div>];

  return (
    <Card actions={Actions} className={`feed-card ${loading ? "loading" : "idle"}`} cover={<FeedCardMedia type={feed.postType} medias={feed.medias} />}>
      <Card.Meta avatar={<Avatar src={feed.user.avatar}>{feed.user.username}</Avatar>} title={feed.user.username} description={feed.title}></Card.Meta>
    </Card>
  );
};

export default React.memo(FeedCard, (prev, next) => prev.feed.id === next.feed.id);
