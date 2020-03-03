import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import { Main } from "layout";
import { Paths } from "./objects";

// Protect Router
export const Routers = () => {
  const routeComponents = Paths.map(({ path, component }, key) => (
    <Route exact path={path} component={component || ""} key={key} />
  ));
  return (
    <Main>
      <Switch>{routeComponents}</Switch>
    </Main>
  );
};
