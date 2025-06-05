import type {ILessonList} from "shared/interfaces";
import type {FC} from "react";
import {Link} from "react-router";

import './LessonLabel.scss';

interface ComponentProps {
    lesson: ILessonList;
    module: number;
}

export const LessonLabel: FC<ComponentProps> = ({lesson, module}) => {
    return (
        <Link className='flex justify-sb align-center lesson_link' to={`/lessons/${module}/${lesson.id}`}>
            <p>{lesson.title}</p>
            <p>{lesson.duration} мин</p>
        </Link>
    );
};

