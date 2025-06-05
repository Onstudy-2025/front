import type {FC, ReactNode} from "react";

import './Button.scss';

interface ComponentProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'circle';
    children?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button: FC<ComponentProps> = (props) => {
    const {type, variant, children, icon, onClick, className} = props;

    return (
        <button type={type} className={`btn ${variant} ${className}`} onClick={onClick}>
            {icon}
            <p>{children}</p>
        </button>
    );
};