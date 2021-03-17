import { Redirect, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import NotFound from '../containers/404/NotFound';

const OrderList = lazy(() => import('../containers/order/Orders'));
const OrderDetail = lazy(() => import('../containers/order/Detail'));

const AppRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/order'} />
        </Route>
        <Route path={'/order/:id'} exact>
          <OrderDetail />
        </Route>
        <Route path={'/order'} exact>
          <OrderList />
        </Route>
        <Route path={'/*'} exact>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
