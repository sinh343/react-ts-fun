import React from 'react';
import { Home } from 'components/pages/home'
import { BrowserRouter, Route } from 'react-router-dom';
import GenericPage from 'components/pages/shared/genericPage';

const [Page1, Page2, Page3] = [1, 2, 3].map(num => <GenericPage title={num} />)

export function Router() {
  return (
    <BrowserRouter>
      <Home />
      <Route path='/1' render={() => Page1} />
      <Route path='/2' render={() => Page2} />
      <Route path='/3' render={() => Page3} />
    </BrowserRouter>
  );
}

export default Router;
