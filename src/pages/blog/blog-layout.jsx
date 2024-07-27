import { Route, Switch } from "react-router-dom";
import { blogRoutes } from "../../routes/blog.routes";

const BlogLayout = () => {
  return (
    <Switch>
      {blogRoutes.map((route) => {
        console.log(route);
        const Component = route.component;
        return (
          <Route exact={true} key={route.path} path={route.path}>
            <Component route={route} />
          </Route>
        );
      })}
    </Switch>
  );
};

export default BlogLayout;
