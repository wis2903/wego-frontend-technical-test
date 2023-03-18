import MiniSearch from 'minisearch';
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
        imageUrl: `${String(data.imageUrl)}?v=${Math.random()}`,
        promotion: FoodPromotionStringToEnum(data.promotion),
        isNew: Boolean(data.isNew),
    };
};

export const searchFoods = (data: IFoodDetails[], keyword: string): IFoodDetails[] => {
    if(!keyword) return data;
    
    const miniSearch = new MiniSearch({
        fields: ['name', 'restaurant'],
    });
    miniSearch.addAll(data);
    // const results = miniSearch.search(keyword);
    // console.log(results);
    return [];
};