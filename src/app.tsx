import React from 'react';
import Button from './components/button';
import Input from './components/input';
import Tab from './components/tab';
import SearchIcon from './resources/images/search.png';

const App = (): JSX.Element => {
  return (
    <div>
      <Button outline>Show More</Button>
      <br />
      <br />
      <div style={{ width: '360px' }}>
        <Input iconUrl={SearchIcon} placeholder='Enter restaurant name...' />
      </div>
      <br />
      <Tab
        items={[
          {
            title: 'All',
            value: 1,
            active: true,
          },
          {
            title: 'Sushi',
            value: 2,
          },
          {
            title: 'Pizza',
            value: 3,
          },
        ]}
      />
    </div>
  );
};

export default App;