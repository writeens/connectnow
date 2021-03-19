/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import routes from './routes';

const CustomRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
        >
          <route.component />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default CustomRouter;
