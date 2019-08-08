import React from 'react';
import { Home } from 'components/pages/home'
import { Route, Switch } from 'react-router-dom';
import GenericPage from 'components/pages/shared/genericPage';
import TestParentPage from './pages/shared/testParentPage';
import { Pokemon } from './pages/pokemon';
import logo from 'logo.svg';
import pokeball from 'pokeball.svg'
const [Page1, Page2, Page3] = [1, 2, 3].map(num => <GenericPage title={num} />)

export const urls = {
  '/': {
    'pokemon': {},
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
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/pokemon' render={() => <img src={pokeball} className="App-logo" alt="logo" />} />
          <Route path='/' render={() => <img src={logo} className="App-logo" alt="logo" />} />
        </Switch>


      </header>
      <main>
        <Home />
        <Switch>
          <Route exact path='/1' render={() => Page1} />
          <Route exact path='/2' render={() => Page2} />
          <Route exact path='/3' render={() => Page3} />
          <Route path='/4' component={TestParentPage} />
          <Route path='/pokemon' component={Pokemon} />
        </Switch>
      </main>
    </div>
  );
}

export default Router;
