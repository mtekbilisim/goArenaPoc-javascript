import { Affix, Button, Col, Empty, Row, Space, Spin, Typography } from "antd";
import { Feed, FeedStatus } from "models/feed";
import * as React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { GetFeeds } from "services/feeds";
import FeedList from "./views/feeds";
import "./style.less";
import { API } from "API";
import { motion } from "framer-motion";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const params = useParams<{ status: FeedStatus }>();

  const [loading, setLoading] = React.useState(false);

  const { data, isLoading } = useQuery("feeds", GetFeeds);

  const [selectedFeeds, setSelectedFeeds] = React.useState<Feed[]>([]);

  const updateFeedStatus = async (status: FeedStatus) => {
    if (!selectedFeeds.length) return;

    setLoading(true);

    try {
      const $feedsWithUserId = selectedFeeds.map((d) => {
        return { ...d, userId: d.user.id, status: status };
      });
      await API.put("feeds/status", $feedsWithUserId);
    } catch (error) {
      console.error("Error on feed status update", error);
    }

    setLoading(false);
  };

  const _updatableStatus = params.status === FeedStatus.APPROVED ? FeedStatus.DECLINED : FeedStatus.APPROVED;
  const _updateButtonOffsetTop = document.body.offsetHeight - 100;

  const filtered = params.status ? data?.filter((d) => d.status === params.status) : data?.filter((d) => d.status === FeedStatus.WAITING_APPROVAL || d.status === FeedStatus.DRAFT);

  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <Typography.Title level={2}>Paylaşımlar</Typography.Title>
      </Col>
      <Col span={24}>
        <Row gutter={[12, 10]}>
          <Col>
            <NavLink className='card-filter-button' activeClassName='active' exact={true} to={`/feeds`}>
              Onay Bekleyenler
            </NavLink>
          </Col>
          <Col>
            <NavLink className='card-filter-button' activeClassName='active' to={`/feeds/${FeedStatus.APPROVED}`}>
              Onaylananlar
            </NavLink>
          </Col>
          <Col>
            <NavLink className='card-filter-button' activeClassName='active' to={`/feeds/${FeedStatus.DECLINED}`}>
              Reddedilenler
            </NavLink>
          </Col>
          {selectedFeeds.length > 0 && (
            <Col span={24} className='selected-feeds-wrapper'>
              <Row justify='center'>
                <Col flex='0 0 300px' style={{ textAlign: "center" }}>
                  <motion.div initial={{ opacity: 0.1, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                    <div className='selected-feeds-info'>
                      <Space size={10}>
                        <span className='selected-feeds-info-text'>{selectedFeeds.length} seçildi</span>
                        <Button type='link' onClick={() => updateFeedStatus(_updatableStatus)}>
                          {_updatableStatus === FeedStatus.APPROVED ? <div>Seçilenleri Onayla</div> : <div className='selected-feeds-info-text-decline'>Seçilenleri Yayından Kaldır</div>}
                        </Button>
                      </Space>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Col>
      <Col span={24}>
        {/* <AnimatePresence key={params.status} exitBeforeEnter={true}> */}
        <Spin spinning={isLoading || loading}> {filtered && filtered.length ? <FeedList feeds={filtered} onSelect={setSelectedFeeds} clearSelecteds={loading || isLoading || params.status} /> : <Empty />}</Spin>
        {/* </AnimatePresence> */}
      </Col>
    </Row>
  );
};

export default HomePage;
