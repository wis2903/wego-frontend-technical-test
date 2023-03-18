
import React from 'react';
import Button from '../../../components/button';
import FoodCard from '../../../components/food-card';
import FoodsPlaceholder from './placeholder';
import styles from './styles.module.scss';
import config from '../../../config';
import FoodEmptyResults from './empty';
import { foodService } from '../../../services/food.service';
// import { searchFoods } from '../../../helpers/data.helper';

interface IFoodState {
    loading: boolean,
    data?: IFoodDetails[],
}

interface ILimitationCache {
    categoryId: string,
    limit: number,
}

const HomePageFoods = ({ categoryId, keyword }: { categoryId: string, keyword: string }): JSX.Element => {
    const [foods, setFoods] = React.useState<IFoodState>({ loading: true });
    const [toggle, setToggle] = React.useState<boolean>(true);
    const limitationCache = React.useRef<ILimitationCache[]>([]);

    const fetchFoods = async (): Promise<void> => {
        try {
            const res = await foodService.list();
            setFoods({ loading: false, data: res });
        } catch (e) {
            setFoods({ loading: false, data: [] });
        }
    };

    const refresh = (): void => {
        setToggle(!toggle);
    };

    const handleShowMoreFoods = (): void => {
        let limit = limitationCache.current.find(item => item.categoryId === categoryId)?.limit || config.pagination.numberOfItemsPerPage;
        limit += config.pagination.numberOfItemsPerPage;
        const cachedLimitation = limitationCache.current.find(item => item.categoryId === categoryId);
        if (cachedLimitation) cachedLimitation.limit = limit;
        else limitationCache.current.push({ categoryId, limit });
        refresh();
    };

    React.useEffect(() => {
        fetchFoods();
    }, []);

    if (foods.loading) return <FoodsPlaceholder />;
    if (!foods.data) return <></>;

    const limit = limitationCache.current.find(item => item.categoryId === categoryId)?.limit || config.pagination.numberOfItemsPerPage;
    const filteredFoodsByCategory = !categoryId ? foods.data : foods.data.filter(item => item.categoryId === categoryId);
    const filteredFoods = filteredFoodsByCategory.filter(item => item.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1);
    // const filteredFoods = searchFoods(filteredFoodsByCategory, keyword);
    const filteredFoodsWithLimitation = filteredFoods.slice(0, limit);

    if (!filteredFoodsWithLimitation.length) return (
        <FoodEmptyResults
            suggestion={filteredFoodsByCategory.slice(0, config.pagination.numberOfItemsPerPage)}
        />
    );

    return (
        <div className={styles.container}>
            {
                filteredFoodsWithLimitation.map(item =>
                    <FoodCard
                        key={item.id}
                        className={styles.foodCard}
                        data={item}
                    />
                )
            }

            {
                limit < filteredFoods.length
                &&
                <div className={styles.pagination}>
                    <Button outline onClick={handleShowMoreFoods}>
                        <span>+</span>
                        Show More
                    </Button>
                </div>
            }
        </div>
    );
};

export default HomePageFoods;