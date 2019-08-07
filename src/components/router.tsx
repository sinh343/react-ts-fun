import React from 'react';
import { Home } from 'components/pages/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenericPage from 'components/pages/shared/genericPage';
import TestParentPage from './pages/shared/testParentPage';
import { Pokemon } from './pages/pokemon';

const [Page1, Page2, Page3] = [1, 2, 3].map(num => <GenericPage title={num} />)

export const urls = {
  '/': {
    '/1': {},
    '/2': {},
    '/3': {},
    '/4': {
      '/1': {},
      '/2': {}
    }
  }
}

export function Router() {
  return (
    <BrowserRouter>
      <Home />
      <Switch>
        <Route exact path='/1' render={() => Page1} />
        <Route exact path='/2' render={() => Page2} />
        <Route exact path='/3' render={() => Page3} />
        <Route path='/4' component={TestParentPage} />
        <Route exact path='/pokemon' component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
