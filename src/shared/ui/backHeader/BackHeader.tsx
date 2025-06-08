import type {FC, ReactNode} from "react";
import {Link} from "react-router";
import {ArrowSVG} from "shared/icons";

import './BackHeader.scss'

interface ComponentProps {
    children?: ReactNode;
    backLink: string
}

export const BackHeader: FC<ComponentProps> = (props) => {
    const {children, backLink} = props;
    return (
        <div className='back_header flex justify-center align-center mb-24'>
            <Link to={backLink} className='back_svg'><ArrowSVG/></Link>
            {children}
        </div>
    );
};
