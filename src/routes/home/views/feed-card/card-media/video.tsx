import * as React from "react";

interface IFeedVideoMediaProps {
  src: string;
}

const FeedVideoMedia: React.FunctionComponent<IFeedVideoMediaProps> = (props) => {
  const [error, setError] = React.useState<boolean>(false);

  return error ? <div className='video-error'>Video Yükelenemedi</div> : <video key={props.src} onError={() => setError(true)} src={props.src}></video>;
};

export default FeedVideoMedia;
