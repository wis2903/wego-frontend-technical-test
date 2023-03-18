import React from 'react';
import Button from './components/button';
import FoodCard from './components/food-card';
import Input from './components/input';
import Tab from './components/tab';
import SearchIcon from './resources/images/search.png';
import { FoodPromotionEnum } from './constants/enum';

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
      <br />
      <FoodCard
        data={{
          'id': '628b5decf5ff6283fb4fef73',
          'index': 7,
          'rating': 0.1815,
          'promotion': FoodPromotionEnum.onePlusOne,
          'isNew': false,
          'categoryId': '6288a89f70dc8cf93b71609b',
          'minCookTime': 70,
          'maxCookTime': 90,
          'restaurant': 'Puria',
          'name': 'Puria Hot Meals',
          'imageUrl': 'https://source.unsplash.com/random/400x400?Hot%20Meals'
        }}
      />
    </div>
  );
};

export default App;