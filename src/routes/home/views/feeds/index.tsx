import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { API } from "API";
import { motion, Variants } from "framer-motion";
import { Feed, FeedStatus } from "models/feed";
import * as React from "react";
import Masonry from "react-masonry-css";
import { array } from "yup";
import FeedCard from "../feed-card";
import "./feeds.less";

interface IFeedListProps {
  feeds: Feed[];
}

const masonryBreakpoints = {
  default: 5,
  1500: 4,
  1250: 3,
  790: 2,
  540: 1,
};

const FeedList: React.FunctionComponent<IFeedListProps> = (props) => {
  const [selectedFeeds, setSelectedFeeds] = React.useState<number[]>([]);

  const [loading, setloading] = React.useState(true);

  const { feeds } = props;

  React.useEffect(() => {
    let $wait: NodeJS.Timeout;

    if (feeds.length && loading) {
      $wait = setTimeout(() => {
        setloading(false);
      }, 400);
    }

    return () => {
      clearTimeout($wait);
    };
  }, [feeds]);

  const send = async () => {
    const $feeds = feeds
      .filter((feed) => selectedFeeds.indexOf(feed.id) !== -1)
      .map((d) => {
        return { ...d, userId: d.user.id, status: FeedStatus.APPROVED };
      });

    await API.put("feeds/status", $feeds);
  };

  const onSelectFeed = React.useCallback(
    (feed: Feed) => {
      const index = selectedFeeds.indexOf(feed.id);
      console.log("selectedFeeds", selectedFeeds);

      console.log(index);

      if (index === -1) {
        setSelectedFeeds((a) => [...a, feed.id]);
      } else {
        setSelectedFeeds((a) => [...a.filter((id) => id !== feed.id)]);
      }
    },
    [selectedFeeds]
  );

  return (
    <div className={`${selectedFeeds && selectedFeeds?.length > 0 ? "show-feed-actions" : null}`}>
      {selectedFeeds?.join(",")}
      <Button onClick={send}>Gönder</Button>
      <Masonry breakpointCols={masonryBreakpoints} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
        {feeds?.map((feed) => (
          <div className={`masonry-feeds-item`} key={feed.id}>
            <FeedCard feed={feed} />
            <div className='feed-card-overlay'>
              <div onClick={() => (selectedFeeds && selectedFeeds?.length > 0 ? onSelectFeed(feed) : {})} className='feed-card-overlay-actions'>
                <Button onClick={() => onSelectFeed(feed)}>
                  <Checkbox checked={selectedFeeds.indexOf(feed.id) !== -1} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default FeedList;
