import { Carousel, Image } from "antd";
import { FeedType, Media } from "models/feed";
import * as React from "react";
import FeedImageMedia from "./image";
import FeedVideoMedia from "./video";
import "./card-media.less";

interface IFeedCardMediaProps {
  medias: Media[];
  type: FeedType;
}

const FeedCardMedia: React.FunctionComponent<IFeedCardMediaProps> = (props) => {
  const { medias, type } = props;

  return (
    <span>
      {medias.length ? (
        medias.length === 1 ? (
          <RenderMedia media={medias[0]} type={type} />
        ) : (
          <Image.PreviewGroup>
            <Carousel adaptiveHeight={true}>
              {medias
                .filter((m) => m.uri && /image|video/.test(m.mimeType))
                .map((media) => (
                  <RenderMedia key={media.id} media={media} type={type} />
                ))}
            </Carousel>
          </Image.PreviewGroup>
        )
      ) : (
        <div />
      )}
    </span>
  );
};

interface IRenderMediaProps {
  media: Media;
  type: FeedType;
}

const RenderMedia: React.FunctionComponent<IRenderMediaProps> = React.memo(({ media, type, ...props }) =>
  type === FeedType.IMAGE || (media.uri && media.mimeType.includes("image")) ? (
    <FeedImageMedia placeholder={<div style={{ minHeight: 140 }}></div>} src={media.uri} />
  ) : type === FeedType.VIDEO || (media.uri && media.mimeType.includes("video")) ? (
    <FeedVideoMedia src={media.uri} />
  ) : null
);

export default FeedCardMedia;
