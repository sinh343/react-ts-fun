import React from 'react';
import { Home } from 'components/pages/home'
import { BrowserRouter, Route } from 'react-router-dom';
import GenericPage from 'components/pages/shared/genericPage';
import TestParentPage from './pages/shared/testParentPage';

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
      <Route exact path='/1' render={() => Page1} />
      <Route exact path='/2' render={() => Page2} />
      <Route exact path='/3' render={() => Page3} />
      <Route path='/4' component={TestParentPage} />
    </BrowserRouter>
  );
}

export default Router;
