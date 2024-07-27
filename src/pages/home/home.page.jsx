import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Authentication from "../../components/organisms/authentication/authentication.component";
import ResponsiveDrawer from "../../components/organisms/side.drawer/side.drawer";
import { dashboardRoutes } from "../../routes/dashboard.routes";
import { useStore } from "../../store";
import axios from "../../axios";

const HomePage = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const setWebsiteContent = useStore((state) => state.setWebsiteContent);

  useEffect(() => {
    axios.get("getWebsiteContent").then((response) => {
      if (response?.data?.content) {
        setWebsiteContent(response?.data?.content);
      }
    });
  }, []);

  useEffect(() => {
    if (!token) history.replace("/");
  }, [token, history]);
  return (
    <Authentication>
      <Switch>
        {dashboardRoutes.map((route) => {
          const Component = route.component;
          return (
            <Route exact={false} key={route.path} path={route.path}>
              <ResponsiveDrawer>
                <Component route={route} />
              </ResponsiveDrawer>
            </Route>
          );
        })}
        <Redirect from="/d" to={dashboardRoutes[0].path} />
      </Switch>
    </Authentication>
  );
};

export default HomePage;
