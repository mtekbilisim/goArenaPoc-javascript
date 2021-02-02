import { Image, ImageProps } from "antd";
import * as React from "react";

interface IFeedImageMediaProps extends ImageProps {}

const FeedImageMedia: React.FunctionComponent<IFeedImageMediaProps> = (props) => {
  return <Image fallback='Yüklenemedi' {...props} />;
};

export default FeedImageMedia;
