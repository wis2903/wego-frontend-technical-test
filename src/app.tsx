import React from 'react';
import HomePage from './pages/home';

const App = (): JSX.Element => {
  return (
    <div className='app'>
      <div className='main-content'>
        <HomePage />
      </div>
    </div>
  );
};

export default App;