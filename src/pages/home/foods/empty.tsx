import React from 'react';
import FoodCard from '../../../components/food-card';
import styles from './styles.module.scss';

interface IFoodEmptyResultsProps {
    suggestion: IFoodDetails[],
}

const FoodEmptyResults = ({ suggestion }: IFoodEmptyResultsProps): JSX.Element => {
    return (
        <>

            <h2 className={styles.empty}>
                Oops! We can not find any result.
            </h2>
            {
                !!suggestion.length
                &&
                <>
                    <div className={styles.note}>Recommended for you:</div>
                    <div className={styles.container}>
                        {
                            suggestion.map(item =>
                                <FoodCard
                                    key={item.id}
                                    className={styles.foodCard}
                                    data={item}
                                />
                            )
                        }
                    </div>
                </>
            }
        </>

    );
};

export default FoodEmptyResults;