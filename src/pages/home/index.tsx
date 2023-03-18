import React from 'react';
import Button from '../../components/button';
import FoodCard from '../../components/food-card';
import Input from '../../components/input';
import Tab from '../../components/tab';
import styles from './styles.module.scss';
import { FoodPromotionEnum } from '../../constants/enum';
import SearchIcon from '../../resources/images/search.png';

const HomePage = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.search}>
                        <Input 
                            placeholder='Enter restaurant name... ' 
                            iconUrl={SearchIcon}
                        />
                    </div>

                    <div className={styles.categories}>
                        <Tab
                            items={[
                                {
                                    title: 'All',
                                    value: 'all',
                                    active: true,
                                },
                                {
                                    title: 'Sushi',
                                    value: 'sushi',
                                },
                                {
                                    title: 'Pizza',
                                    value: 'pizza',
                                },
                                {
                                    title: 'Burgers',
                                    value: 'burgers',
                                },
                                {
                                    title: 'Hot meals',
                                    value: 'hot-meals',
                                },
                                {
                                    title: 'Desserts',
                                    value: 'desserts',
                                },
                                {
                                    title: 'Drinks',
                                    value: 'drinks',
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className={styles.list}>
                    {
                        [{
                            'id': '628b5decc94a27754f30e6f1',
                            'index': 0,
                            'rating': 3.9508,
                            'promotion': FoodPromotionEnum.gift,
                            'isNew': false,
                            'categoryId': '6288a89fac9e970731bfaa7b',
                            'minCookTime': 80,
                            'maxCookTime': 100,
                            'restaurant': 'Niquent',
                            'name': 'Niquent Drinks',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Drinks'
                        },
                        {
                            'id': '628b5decf39bcc4e982fc88a',
                            'index': 1,
                            'rating': 4.9874,
                            'promotion': FoodPromotionEnum.onePlusOne,
                            'isNew': false,
                            'categoryId': '6288a89f1f0152b8c2cd512b',
                            'minCookTime': 120,
                            'maxCookTime': 140,
                            'restaurant': 'Boilicon',
                            'name': 'Boilicon Sushi',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Sushi'
                        },
                        {
                            'id': '628b5dec6678e96d75f2f7de',
                            'index': 2,
                            'rating': 3.4518,
                            'promotion': null,
                            'isNew': true,
                            'categoryId': '6288a89f1f0152b8c2cd512b',
                            'minCookTime': 100,
                            'maxCookTime': 120,
                            'restaurant': 'Quinex',
                            'name': 'Quinex Sushi',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Sushi'
                        },
                        {
                            'id': '628b5dec97eacf5e8a604bd7',
                            'index': 3,
                            'rating': 1.5975,
                            'promotion': FoodPromotionEnum.gift,
                            'isNew': false,
                            'categoryId': '6288a89f7338764f2071a8a8',
                            'minCookTime': 120,
                            'maxCookTime': 140,
                            'restaurant': 'Perkle',
                            'name': 'Perkle Pizza',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Pizza'
                        },
                        {
                            'id': '628b5decf99b6a8dc80af3b6',
                            'index': 4,
                            'rating': 0.8644,
                            'promotion': null,
                            'isNew': true,
                            'categoryId': '6288a89fac9e970731bfaa7b',
                            'minCookTime': 70,
                            'maxCookTime': 90,
                            'restaurant': 'Zanymax',
                            'name': 'Zanymax Drinks',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Drinks'
                        },
                        {
                            'id': '628b5dec0690be0f73109de7',
                            'index': 5,
                            'rating': 4.7915,
                            'promotion': FoodPromotionEnum.onePlusOne,
                            'isNew': true,
                            'categoryId': '6288a89fe6c2fe0b758360fe',
                            'minCookTime': 90,
                            'maxCookTime': 110,
                            'restaurant': 'Sunclipse',
                            'name': 'Sunclipse Desserts',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Desserts'
                        },
                        {
                            'id': '628b5dec146488677e4f035d',
                            'index': 6,
                            'rating': 2.607,
                            'promotion': FoodPromotionEnum.gift,
                            'isNew': false,
                            'categoryId': '6288a89f1f0152b8c2cd512b',
                            'minCookTime': 70,
                            'maxCookTime': 90,
                            'restaurant': 'Quizmo',
                            'name': 'Quizmo Sushi',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Sushi'
                        },
                        {
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
                        },
                        {
                            'id': '628b5dec03f30dceb9d78f5a',
                            'index': 8,
                            'rating': 0.2835,
                            'promotion': null,
                            'isNew': false,
                            'categoryId': '6288a89fe6c2fe0b758360fe',
                            'minCookTime': 100,
                            'maxCookTime': 120,
                            'restaurant': 'Eventage',
                            'name': 'Eventage Desserts',
                            'imageUrl': 'https://source.unsplash.com/random/400x400?Desserts'
                        }].map(item =>
                            <FoodCard
                                key={item.id}
                                className={styles.foodCard}
                                data={item as IFoodDetails}
                            />
                        )
                    }

                    <div className={styles.pagination}>
                        <Button outline>
                            <span>+</span>
                            Show More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;