import axios from 'axios';
import config from '../config';
import { parseFoodData } from '../helpers/data.helper';

class FoodService {
    list(): Promise<IFoodDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.apiBaseUrl}/${config.foodAPIEndpoint}`).then(res => {
                if (!Array.isArray(res.data)) reject(new Error('foods list not found'));
                resolve(res.data.map((item: Record<string, unknown>) => parseFoodData(item)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export const foodService = new FoodService();
export default FoodService;