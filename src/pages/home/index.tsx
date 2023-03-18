import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.scss';
import SearchIcon from '../../resources/images/search.png';
import HomePageCategories from './categories';
import HomePageFoods from './foods';

const HomePage = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <div className={styles.search}>
                        <Input
                            placeholder='Enter restaurant name... '
                            iconUrl={SearchIcon}
                        />
                    </div>

                    <HomePageCategories />
                </div>

                <HomePageFoods />
            </div>
        </div>
    );
};

export default HomePage;