import React from 'react';
import Button from './components/button';
import Input from './components/input';
import SearchIcon from './resources/images/search.png';

const App = (): JSX.Element => {
  return (
    <div>
      <Button primary>Show More</Button>
      <br />
      <Input iconUrl={SearchIcon} placeholder='Enter restaurant name...'/>
    </div>
  );
};

export default App;