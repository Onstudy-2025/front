import type {FC} from "react";

interface ComponentProps {
    className: string;
}

export const GradientCircle: FC<ComponentProps> = ({className}) => {
    return (
        <div className={className}>
            <svg width="792" height="792" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f)">
                    <circle cx="200" cy="200" r="100" fill="#5D37BB"/>
                </g>
                <defs>
                    <filter id="filter0_f" x="-200" y="-200" width="792" height="792" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur"/>
                    </filter>
                </defs>
            </svg>

        </div>
    );
};