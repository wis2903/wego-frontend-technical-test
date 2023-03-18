import axios from 'axios';
import config from '../config';
import { parseCategoryData } from '../helpers/data.helper';

class CategoryService {
    list(): Promise<ICategoryDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.api.apiBaseUrl}/${config.api.categoryAPIEndpoint}`).then(res => {
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