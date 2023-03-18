export enum FoodPromotionEnum {
    gift = 'gift',
    onePlusOne = '1+1',
    discount = 'discount',
}

export const FoodPromotionStringToEnum = (value?: unknown): FoodPromotionEnum | undefined => {
    switch(value) {
        case 'gift':
            return FoodPromotionEnum.gift;
        case '1+1':
            return FoodPromotionEnum.onePlusOne;
        case 'discount':
            return FoodPromotionEnum.discount;
        default:
            return undefined;
    }
};