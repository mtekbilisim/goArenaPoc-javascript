import { Col, Divider, Row } from "antd";
import { IRoutes } from "models/route";
import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Logo from "./logo";
import "./public-layout.less";

interface IPublicLayoutProps {
  routes: IRoutes;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ routes, ...props }) => {
  return (
    <div className='public-layout-container'>
      <Row justify='center' align='middle' className='public-page'>
        <Col xs={6} sm={8} md={10}></Col>
        <Col xs={18} sm={16} md={14}>
          <Row justify='center' align='middle' className='public-page-content'>
            <Col span={22} flex='0 0 420px' className='public-page-form-inside'>
              <Row justify='center' gutter={0}>
                <Col>
                  <Logo />
                </Col>
                <Col span={24}>
                  <Divider type='horizontal' plain={true} />
                </Col>
              </Row>
              <Switch>
                {routes.map((r, i) => {
                  return <Route key={i} {...r} component={r.component} />;
                })}
                <Redirect to='/login' />
              </Switch>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PublicLayout;
