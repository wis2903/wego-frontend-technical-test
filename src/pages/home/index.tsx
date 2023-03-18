import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.scss';
import SearchIcon from '../../resources/images/search.png';
import HomePageCategories from './categories';
import HomePageFoods from './foods';

const HomePage = (): JSX.Element => {
    const [activeCategoryId, setActiveCategoryId] = React.useState<string>('');
    const [keyword, setKeyword] = React.useState<string>('');

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.search}>
                        <Input
                            placeholder='Enter restaurant name... '
                            iconUrl={SearchIcon}
                            value={keyword}
                            onChange={(e): void => {
                                setKeyword(e.target.value);
                            }}
                        />
                    </div>

                    <HomePageCategories onChange={(catId): void => {
                        setActiveCategoryId(catId);
                    }} />
                </div>

                <HomePageFoods categoryId={activeCategoryId} keyword={keyword} />
            </div>
        </div>
    );
};

export default HomePage;