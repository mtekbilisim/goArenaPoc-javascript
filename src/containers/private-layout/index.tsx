import { IRoutes } from "models/route";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

interface IPrivateLayoutProps {
  routes: IRoutes;
}

const PrivateLayout: React.FunctionComponent<IPrivateLayoutProps> = (props) => {
  const { routes } = props;

  const FilteredRoutes = routes;

  return (
    <div>
      Private
      <Switch>
        {FilteredRoutes.map((r, i) => (
          <Route key={i} {...r} component={r.component} />
        ))}
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default PrivateLayout;
