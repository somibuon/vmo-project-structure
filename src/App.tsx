import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { store } from './store';
import AppLayout from './layout/App.layout';
import { history } from './helpers/history';

import 'antd/dist/antd.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          <Switch>
            <Route path={'/'}>
              <AppLayout />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
