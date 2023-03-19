import MiniSearch from 'minisearch';
import { FoodPromotionStringToEnum } from '../constants/enum';

/**
 * Parse data object to ICategoryDetails type
 * @param data: Input data object - Record<string, unknown>
 * @returns ICategoryDetails
 */
export const parseCategoryData = (data: Record<string, unknown>): ICategoryDetails => {
    return {
        id: String(data.id),
        name: String(data.name),
    };
};

/**
 * Parse data object to IFoodDetails type
 * @param data: Input data object - Record<string, unknown>
 * @returns IFoodDetails
 */
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

/**
 * Search foods by a given keyword using Mini search
 * @param data: List of foods in IFoodDetails type
 * @param keyword: Keyword to filter in string
 * @returns List of foods filtered by keyword
 */
export const searchFoods = (data: IFoodDetails[], keyword: string): IFoodDetails[] => {
    if (!keyword) return data;

    const simpleSearchResults = data.filter(o => o.restaurant.toLowerCase() === keyword.toLowerCase());
    if(simpleSearchResults.length) return [simpleSearchResults[0]];

    const miniSearch = new MiniSearch({
        fields: ['name', 'restaurant'],
        storeFields: Object.keys(data[0]),
        searchOptions: {
            prefix: true,
            fuzzy: 2,
        }
    });
    miniSearch.addAll(data);
    const results = miniSearch.search(keyword);
    return results.map(item => parseFoodData(item));
};