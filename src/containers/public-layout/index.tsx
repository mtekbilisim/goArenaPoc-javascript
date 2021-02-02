import { IRoutes } from "models/route";
import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./public-layout.less";

interface IPublicLayoutProps {
  routes: IRoutes;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ routes, ...props }) => {
  return (
    <div className='public-layout-container'>
      <Switch>
        {routes.map((r, i) => {
          return <Route key={i} {...r} component={r.component} />;
        })}
        <Redirect to='/login' />
      </Switch>
    </div>
  );
};

export default PublicLayout;
