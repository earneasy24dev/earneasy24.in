import React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "./routes/main.routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

toast.configure();
function App() {
  return (
    <Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <Switch>
          {mainRoutes.map((route, idx) => {
            const Component = route.component;
            return (
              <Route key={idx} exact={route.exact} path={route.path}>
                <Component route={route} />
              </Route>
            );
          })}
        </Switch>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
