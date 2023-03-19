import axios from 'axios';
import config from '../config';
import { parseCategoryData } from '../helpers/data.helper';

class CategoryService {
    /**
     * Fetching categories from API
     * @returns Promise for list of categories
     */
    list(): Promise<ICategoryDetails[]> {
        return new Promise((resolve, reject) => {
            axios.get(`${config.api.apiBaseUrl}/${config.api.categoryAPIEndpoint}`).then(res => {
                // If 'data' field doesn't exist in the response or not in the right data type -> throw error
                if (!Array.isArray(res.data)) reject(new Error('categories list not found'));
                // Parse 'data' from API to ICategoryDetails list
                resolve(res.data.map((item: Record<string, unknown>) => parseCategoryData(item)));
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export const categoryService = new CategoryService();
export default CategoryService;