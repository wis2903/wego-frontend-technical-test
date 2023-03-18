import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import StartIcon from '../../resources/images/star.png';
import GiftIcon from '../../resources/images/gift.png';
import { FoodPromotionEnum } from '../../constants/enum';

interface IFoodCardProps {
    className?: string,
    data: IFoodDetails,
}

const FoodPromotion = ({ promotion }: { promotion?: FoodPromotionEnum }): JSX.Element | null => {
    if (promotion === FoodPromotionEnum.discount) {
        return (
            <div className={classNames(styles.promotion, styles.discount)}>%</div>
        );
    }
    if (promotion === FoodPromotionEnum.onePlusOne) {
        return (
            <div className={classNames(styles.promotion, styles.onePlusOne)}>1+1</div>
        );
    }
    if (promotion === FoodPromotionEnum.gift) {
        return (
            <div className={classNames(styles.promotion, styles.gift)}>
                <img src={GiftIcon} alt='gift-icon' />
            </div>
        );
    }

    return null;
};

const FoodCard = ({ className, data }: IFoodCardProps): JSX.Element => {
    return (
        <div className={classNames(styles.container, className)}>
            <FoodPromotion promotion={data.promotion} />
            <div className={styles.previewImage} style={{ backgroundImage: `url(${data.imageUrl})` }} />
            <div className={styles.info}>
                <h3 className={styles.name}>{data.name}</h3>
                <div className={styles.extra}>
                    <div className={styles.tag}>
                        <img src={StartIcon} alt='start-icon' />
                        {data.rating.toFixed(1)}
                    </div>
                    <div className={styles.tag}>{data.minCookTime}-{data.maxCookTime} min</div>
                    {
                        data.isNew
                        &&
                        <div className={classNames(styles.tag, styles.new)}>New</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodCard;