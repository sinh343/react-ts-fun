import React from 'react';
import Terminal from 'components/terminal';
import StateView from 'components/stateView';

export const Home: React.FC = () => {
  return (
    <>
      <Terminal />
      <StateView />
    </>
  );
}

export default Home;
