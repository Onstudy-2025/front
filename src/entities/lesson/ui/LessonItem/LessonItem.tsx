import {Link} from "react-router";
import type {ILesson} from "shared/interfaces";
import type {FC} from "react";

import './LessonItem.scss';

interface ComponentProps {
    lesson: ILesson;
}

export const LessonItem: FC<ComponentProps> = ({lesson}) => {
    return (
        <div className='lesson'>
            <div className='flex fd-column gap-20 align-center'>
                <Link to={lesson.videoLink}>
                    <img className='lesson_image' src={lesson.videoCover} alt='image' />
                </Link>
                <p className='lesson_desc'>{lesson.description}</p>
            </div>
        </div>
    );
};

