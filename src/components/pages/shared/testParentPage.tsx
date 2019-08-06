import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GenericPage from './genericPage';
import { urls } from 'components/router';

function BaseTestParentPage() {
  const rootKeys = Object.keys(urls.root);
  const basePath = rootKeys[rootKeys.length - 1];
  const childrenPath = Object.keys(urls.root["/4"]);
  return (
    <div>
      <h1>4</h1>
      <Switch>
        <Route path={`${basePath}${childrenPath[0]}`} render={() => <GenericPage title={'4/1'} />} />
        <Route path={`${basePath}${childrenPath[1]}`} render={() => <GenericPage title={'4/2'} />} />
      </Switch>
    </div>
  );
}

export const TestParentPage = BaseTestParentPage;
export default TestParentPage;