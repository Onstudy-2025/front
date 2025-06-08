import type {FC, ReactNode} from "react";

import './Button.scss';

interface ComponentProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'circle' | 'link';
    children?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export const Button: FC<ComponentProps> = (props) => {
    const {type, variant, children, icon, onClick, className, disabled} = props;

    return (
        <button type={type} className={`btn btn_${variant} ${className} ${disabled ? 'btn_disabled' : ''}`} onClick={onClick} disabled={disabled}>
            {icon}
            <p>{children}</p>
        </button>
    );
};