import { Col, Layout, Row } from "antd";
import { IRoutes } from "models/route";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import "antd/dist/antd.css";
import "./private-layout.less";

interface IPrivateLayoutProps {
  routes: IRoutes;
}

const PrivateLayout: React.FunctionComponent<IPrivateLayoutProps> = (props) => {
  const { routes } = props;

  const FilteredRoutes = routes;

  return (
    <div className='private-layout'>
      <Layout>
        <Layout.Header>
          <Row justify='space-between'>
            <Col></Col>
            <Col>Fatih</Col>
          </Row>
        </Layout.Header>
        <Layout.Content>
          <Switch>
            {FilteredRoutes.map((r, i) => (
              <Route key={i} {...r} component={r.component} />
            ))}
            <Redirect to='/WAITING_APPROVAL' />
          </Switch>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default PrivateLayout;
