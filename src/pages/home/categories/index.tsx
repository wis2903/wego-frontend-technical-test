import React from 'react';
import styles from './styles.module.scss';
import Tab from '../../../components/tab';
import { categoryService } from '../../../services/category.service';

interface ICategoriesState {
    loading: boolean,
    data?: ICategoryDetails[],
}

const categoryForAllItem: ICategoryDetails = {
    id: '',
    name: 'All',
};

const HomePageCategories = ({ onChange }: { onChange: (categoryId: string) => void }): JSX.Element => {
    const [categories, setCategories] = React.useState<ICategoriesState>({ loading: true });

    const fetchCategoryData = async (): Promise<void> => {
        try {
            const res = await categoryService.list();
            setCategories({ loading: false, data: [categoryForAllItem, ...res] });
        } catch (e) {
            setCategories({ loading: false, data: [categoryForAllItem] });
        }
    };

    React.useEffect(() => {
        fetchCategoryData();
    }, []);

    if (categories.loading) return (
        <div className={styles.placeholder}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );

    return (
        <>
            {
                !categories.loading
                && categories.data
                &&
                <div className={styles.categories}>
                    <Tab
                        items={categories.data.map(item => ({
                            title: item.name,
                            value: item.id,
                            active: item.id === categoryForAllItem.id,
                        }))}
                        onChange={(selected): void => {
                            onChange(String(selected.value));
                        }}
                    />
                </div>
            }
        </>
    );
};

export default HomePageCategories;