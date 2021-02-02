import { Col, Row } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Feed } from "models/feed";
import * as React from "react";

interface ICardActionsProps {
  feed: Feed;
}

const CardActions: React.FunctionComponent<ICardActionsProps> = (props) => {
  const { feed } = props;

  return (
    <Row justify='space-between'>
      <Col span={12}>Onayla</Col>
      <Col span={12}>Sil</Col>
    </Row>
  );
};

export default CardActions;
