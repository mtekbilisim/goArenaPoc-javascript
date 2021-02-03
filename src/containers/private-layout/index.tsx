import { Affix, Avatar, Button, Col, Layout, Row, Space } from "antd";
import { IRoutes } from "models/route";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import "antd/dist/antd.css";
import "./private-layout.less";
import { useStoreActions, useStoreState } from "store";

import { LogoutOutlined } from "@ant-design/icons";

interface IPrivateLayoutProps {
  routes: IRoutes;
}

const PrivateLayout: React.FunctionComponent<IPrivateLayoutProps> = (props) => {
  const { routes } = props;

  const { user } = useStoreState((store) => store.Auth);
  const { logout } = useStoreActions((store) => store.Auth);

  const FilteredRoutes = routes;

  return (
    <div className='private-layout'>
      <Layout>
        <Affix offsetTop={0}>
          <Layout.Header>
            <Row justify='space-between'>
              <Col></Col>
              <Col>
                <Space size={20}>
                  <Space size={5}>
                    <Avatar src={user?.avatar}>{user?.first_name}</Avatar>
                    <span>
                      {user?.first_name} {user?.last_name}
                    </span>
                  </Space>
                  <Button onClick={() => logout()} icon={<LogoutOutlined />} size='small' type='default'>
                    Çıkış
                  </Button>
                </Space>
              </Col>
            </Row>
          </Layout.Header>
        </Affix>
        <Layout.Content>
          <Switch>
            {routes.map((r, i) => (
              <Route key={i} {...r} component={r.component} />
            ))}
            <Redirect push={true} to='/feeds' />
          </Switch>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default PrivateLayout;
