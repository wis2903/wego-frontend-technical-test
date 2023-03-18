import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    iconUrl?: string,
}

const Input = ({ className, iconUrl, ...rest }: IInputProps): JSX.Element => {
    return (
        <div className={classNames(styles.container, className, !!iconUrl && styles.hasIcon)}>
            {
                !!iconUrl
                &&
                <img src={iconUrl} alt='icon' />
            }
            <input {...rest} />
        </div>
    );
};

export default Input;