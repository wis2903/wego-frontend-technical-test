type FoodPromotion =  import('../constants/enum').FoodPromotionEnum;

declare interface IFoodDetails {
    id: string,
    index: number,
    name: string,
    categoryId: string,
    rating: number,
    minCookTime: number,
    maxCookTime: number,
    restaurant: string,
    imageUrl: string,
    promotion?: FoodPromotion,
    isNew?: boolean,
}

declare interface ICategoryDetails {
    id: string,
    name: string,
}