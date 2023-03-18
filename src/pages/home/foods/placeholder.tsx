import React from 'react';
import styles from './styles.module.scss';

const FoodsPlaceholder = (): JSX.Element => {
    return (
        <div className={styles.placeholder}>
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
            <div className={styles.placeholderItem} />
        </div>
    );
};

export default FoodsPlaceholder;