import React from 'react';
import Button from '../../../components/button';
import FoodCard from '../../../components/food-card';
import { foodService } from '../../../services/food.service';
import FoodsPlaceholder from './placeholder';
import styles from './styles.module.scss';

interface IFoodState {
    loading: boolean,
    data?: IFoodDetails[],
}

const HomePageFoods = (): JSX.Element => {
    const [foods, setFoods] = React.useState<IFoodState>({ loading: true });

    const fetchFoods = async (): Promise<void> => {
        try {
            const res = await foodService.list();
            setFoods({ loading: false, data: res });
        } catch (e) {
            setFoods({ loading: false, data: [] });
        }
    };

    React.useEffect(() => {
        fetchFoods();
    }, []);

    if (foods.loading) return <FoodsPlaceholder />;
    if (!foods.data) return <></>;
    return (
        <div className={styles.container}>
            {
                foods.data.map(item =>
                    <FoodCard
                        key={item.id}
                        className={styles.foodCard}
                        data={item}
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
    );
};

export default HomePageFoods;