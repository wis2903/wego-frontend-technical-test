import axios from 'axios';
import config from '../config';
import { parseFoodData } from '../helpers/data.helper';

class FoodService {
    /**
     * Fetching list of foods from API
     * @returns Promise for list of foods
     */
    list(): Promise<IFoodDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.api.apiBaseUrl}/${config.api.foodAPIEndpoint}`).then(res => {
                // If 'data' field doesn't exist in the response or not in the right data type -> throw error
                if (!Array.isArray(res.data)) reject(new Error('foods list not found'));
                // Parse 'data' from API to IFoodDetails list
                resolve(res.data.map((item: Record<string, unknown>) => parseFoodData(item)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export const foodService = new FoodService();
export default FoodService;