import { Col, Empty, Row, Space, Typography } from "antd";
import { FeedStatus } from "models/feed";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { GetFeeds } from "services/feeds";
import FeedList from "./views/feeds";
import "./style.less";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const params = useParams<{ status: FeedStatus }>();

  const { data, isLoading } = useQuery("feeds", GetFeeds);

  console.log(params);

  const filtered = params.status ? data?.filter((d) => d.status === params.status) : data;

  return (
    <Row gutter={[10, 30]}>
      <Col span={24}>
        <Typography.Title>Onay bekleyen paylaşımlar</Typography.Title>
      </Col>
      <Col span={24}>
        <Space>
          <NavLink className='card-filter-button' activeClassName='active' exact={true} to={`/`}>
            Hepsi
          </NavLink>
          <NavLink className='card-filter-button' activeClassName='active' to={`/${FeedStatus.WAITING_APPROVAL}`}>
            Onay Bekleyenler
          </NavLink>
          <NavLink className='card-filter-button' activeClassName='active' to={`/${FeedStatus.DECLINED}`}>
            Reddedilenler
          </NavLink>
        </Space>
      </Col>
      <Col span={24}>
        {/* <AnimatePresence key={params.status} exitBeforeEnter={true}> */}
        {isLoading ? "Yükleniyor.." : filtered && filtered.length ? <FeedList feeds={filtered} /> : <Empty />}
        {/* </AnimatePresence> */}
      </Col>
    </Row>
  );
};

export default HomePage;
