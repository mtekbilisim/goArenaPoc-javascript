import { SetAuthCatcher } from "API";
import { AxiosRequestConfig } from "axios";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter as Router } from "react-router-dom";
import { GetProfile } from "services/authentication";
import { useStoreActions, useStoreState } from "store";
import { FlattenPrivateRoutes, FlattenPublicRoutes } from "./routes";

const PublicContainer = React.lazy(() => import("containers/public-layout"));
const PrivateContainer = React.lazy(() => import("containers/private-layout"));

interface IRoutesProps {}

const _Client = new QueryClient();

const Routes: React.FunctionComponent<IRoutesProps> = () => {
  const { valid, token, user } = useStoreState((state) => state.Auth);
  const { setTokenHeaderSet, setUser, logout, setToken } = useStoreActions((store) => store.Auth);

  const [loading, setLoading] = React.useState(true);

  async function AuthCatch(req: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
        setTokenHeaderSet(true);
        resolve(true);
      } else {
        delete req.headers["Authorization"];
        setTokenHeaderSet(false);
        resolve(true);
        _Client.clear();
      }
    });
  }

  async function GetUserProfile() {
    await SetAuthCatcher(AuthCatch);
    if (!user) {
      try {
        const $user = await GetProfile();
        setUser($user);
      } catch (error) {
        logout();
      }
      setLoading(false);
      // if ($user.locale) {
      //   i18n.changeLanguage($user.locale);
      // }
    }
  }

  React.useEffect(() => {
    SetAuthCatcher(AuthCatch);
    if (!token) return;

    if (!user) {
      GetUserProfile();
    }

    // const RefreshToken = setInterval(async () => {
    //   await RefreshUserToken(token);
    // }, 60000 * 18);

    // return () => {
    //   clearInterval(RefreshToken);
    // };
  }, [token]);

  // React.useEffect(() => {
  //   if (!token) return;
  //   RefreshUserToken(token);
  // }, []);

  return (
    <React.Suspense fallback=''>
      <Router>
        {token ? (
          valid && !loading ? (
            <QueryClientProvider client={_Client}>
              <PrivateContainer routes={FlattenPrivateRoutes} />
            </QueryClientProvider>
          ) : (
            <div>Yükleniyor..</div>
          )
        ) : (
          <PublicContainer routes={FlattenPublicRoutes} />
        )}
      </Router>
    </React.Suspense>
  );
};

export default Routes;
