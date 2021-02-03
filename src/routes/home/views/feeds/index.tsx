import { CheckCircleOutlined } from "@ant-design/icons";
import { Feed } from "models/feed";
import * as React from "react";
import Masonry from "react-masonry-css";
import FeedCard from "../feed-card";
import "./feeds.less";

interface IFeedListProps {
  feeds: Feed[];
  onSelect: (feeds: Feed[]) => void;
  clearSelecteds: boolean | undefined | any;
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

  const { feeds, onSelect, clearSelecteds } = props;

  const onSelectFeed = React.useCallback(
    (feed: Feed) => {
      const index = selectedFeeds.indexOf(feed.id);

      if (index === -1) {
        setSelectedFeeds((a) => [...a, feed.id]);
      } else {
        setSelectedFeeds((a) => [...a.filter((id) => id !== feed.id)]);
      }
    },
    [selectedFeeds]
  );

  React.useEffect(() => {
    setSelectedFeeds([]);
  }, [clearSelecteds]);

  React.useEffect(() => {
    onSelect && onSelect(feeds.filter((f) => selectedFeeds.indexOf(f.id) !== -1));
  }, [selectedFeeds]);

  return (
    <div className={`${selectedFeeds && selectedFeeds?.length > 0 ? "show-feed-actions" : null}`}>
      <Masonry breakpointCols={masonryBreakpoints} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
        {feeds?.map((feed) => (
          <div className={`masonry-feeds-item`} key={feed.id}>
            <FeedCard feed={feed} />
            <div className='feed-card-overlay'>
              <div onClick={() => (selectedFeeds && selectedFeeds?.length > 0 ? onSelectFeed(feed) : {})} className='feed-card-overlay-actions'>
                <button className='feed-card-overlay-actions-check' onClick={() => onSelectFeed(feed)}>
                  <CheckCircleOutlined style={{ color: selectedFeeds.indexOf(feed.id) !== -1 ? "#1890ff" : "white", fontSize: 28, transitionDuration: ".1s" }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default FeedList;
