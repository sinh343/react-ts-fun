import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GenericPage from './genericPage';
import { urls } from 'components/router';

function BaseTestParentPage() {
  const rootKeys = Object.keys(urls['/']);
  const basePath = rootKeys[rootKeys.length - 1];
  const childrenPath = Object.keys(urls['/']["/4"]);
  return (
    <Switch>
      <Route path={`${basePath}`} exact render={() => <h1>4</h1>} />
      <Route path={`${basePath}${childrenPath[0]}`} render={() => <GenericPage title={'4/1'} />} />
      <Route path={`${basePath}${childrenPath[1]}`} render={() => <GenericPage title={'4/2'} />} />
    </Switch>
  );
}

export const TestParentPage = BaseTestParentPage;
export default TestParentPage;