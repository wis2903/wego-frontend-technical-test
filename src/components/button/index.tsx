import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    primary?: boolean,
    disabled?: boolean,
    outline?: boolean,
    children?: React.ReactNode,
}

const Button = ({ className, primary, disabled, outline, children, onClick, ...rest }: IButtonProps): JSX.Element => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        if (disabled) return;
        if (onClick) onClick(e);
    };

    return (
        <button
            {...rest}
            className={
                classNames(
                    styles.container,
                    className,
                    primary && styles.primary,
                    disabled && styles.disabled,
                    outline && styles.outline,
                )
            }
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;