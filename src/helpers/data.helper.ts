import { FoodPromotionStringToEnum } from '../constants/enum';

export const parseCategoryData = (data: Record<string, unknown>): ICategoryDetails => {
    return {
        id: String(data.id),
        name: String(data.name),
    };
};

export const parseFoodData = (data: Record<string, unknown>): IFoodDetails => {
    return {
        id: String(data.id),
        index: Number(data.index),
        name: String(data.name),
        categoryId: String(data.categoryId),
        rating: Number(data.rating),
        minCookTime: Number(data.minCookTime),
        maxCookTime: Number(data.maxCookTime),
        restaurant: String(data.restaurant),
        imageUrl: String(data.imageUrl),
        promotion: FoodPromotionStringToEnum(data.promotion),
        isNew: Boolean(data.isNew),
    };
};