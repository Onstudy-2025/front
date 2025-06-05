import type {FC} from "react";
import {GradientSVG} from "shared/icons";

interface ComponentProps {
    className: string;
}

export const GradientCircle: FC<ComponentProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={GradientSVG} alt='image'/>
        </div>
    );
};