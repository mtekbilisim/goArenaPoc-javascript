import { flattenRoutes } from "utils";

/* Public Pages */
import HomePage from "./home";

/* Private Pages */
import LoginPage from "./login";

/**
 * Icons
 */
// import { calendar } from "react-icons-kit/icomoon/calendar";
// import { home } from "react-icons-kit/icomoon/home";
// import { profile } from "react-icons-kit/icomoon/profile";
// import { user } from "react-icons-kit/icomoon/user";
// import { library } from "react-icons-kit/icomoon/library";
import { IRoutes } from "models/route";

const PublicRoutes: IRoutes = [
  {
    path: "/login",
    title: "Login",
    component: LoginPage,
    exact: true,
  },
];

const PrivateRoutes: IRoutes = [
  {
    path: "/",
    title: "Onay Bekleyen Paylaşımlar",
    component: HomePage,
    exact: true,
  },
];

const FlattenPublicRoutes: IRoutes = flattenRoutes(PublicRoutes);
const FlattenPrivateRoutes: IRoutes = flattenRoutes(PrivateRoutes);

export { PublicRoutes, FlattenPublicRoutes, FlattenPrivateRoutes, PrivateRoutes };
