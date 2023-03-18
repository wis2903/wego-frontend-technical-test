import axios from 'axios';
import config from '../config';
import { parseCategoryData } from '../helpers/data.helper';

class CategoryService {
    list(): Promise<ICategoryDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.apiBaseUrl}/f25ced0a-9ff7-4996-bdc7-430f281c48db`).then(res => {
                if (!Array.isArray(res.data)) reject(new Error('categories list not found'));
                resolve(res.data.map((item: Record<string, unknown>) => parseCategoryData(item)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export const categoryService = new CategoryService();
export default CategoryService;