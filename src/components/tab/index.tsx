import classNames from 'classnames';
import React from 'react';
import Button from '../button';
import styles from './styles.module.scss';

interface ITabItemData {
    title: string,
    value: string | number,
    active?: boolean,
}

interface ITabProps {
    className?: string,
    items: ITabItemData[],
    onChange?: (item: ITabItemData) => void,
}

const Tab = ({ className, items, onChange }: ITabProps): JSX.Element => {
    const [activeItem, setActiveItem] = React.useState<ITabItemData | undefined>(items.find(item => item.active));

    const handleChangeTab = (item: ITabItemData): void => {
        if (item.value === activeItem?.value) return;
        const { active, ...rest } = item;
        if (onChange) onChange(rest);
        setActiveItem(rest);
    };

    return (
        <div className={classNames(styles.container, className)}>
            {items.map(item =>
                <Button
                    key={item.value}
                    outline
                    primary={item.value === activeItem?.value}
                    className={classNames(item.value === activeItem?.value && styles.active)}
                    onClick={(): void => {
                        handleChangeTab(item);
                    }}
                >
                    {item.title}
                </Button>
            )}
        </div>
    );
};

export default Tab;