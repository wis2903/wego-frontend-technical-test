import axios from 'axios';
import config from '../config';
import { parseFoodData } from '../helpers/data.helper';

class FoodService {
    list(): Promise<IFoodDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.api.apiBaseUrl}/${config.api.foodAPIEndpoint}`).then(res => {
                if (!Array.isArray(res.data)) reject(new Error('foods list not found'));
                setTimeout(() => {
                    resolve(res.data.map((item: Record<string, unknown>) => parseFoodData(item)));
                }, 3000);
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export const foodService = new FoodService();
export default FoodService;