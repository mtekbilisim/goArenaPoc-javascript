import { RouteProps } from "react-router-dom";

export interface IRoute extends RouteProps {
  title: string;
  sub?: IRoutes;
  roles?: [];
  hasSidebar?: boolean | undefined;
  showInSidebar?: boolean | undefined;
  icon?: SVGElement;
}

export interface IRoutes extends Array<IRoute> {}
