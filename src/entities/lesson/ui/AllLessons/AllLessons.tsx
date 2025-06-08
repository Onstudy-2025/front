import {Fragment} from "react";
import { useNavigate} from "react-router";

import {PlayItem} from "shared/icons";
import {currentLesson} from "shared/data.ts";
import {LessonItem} from "entities/lesson";
import {BackHeader, Button} from "shared/ui";

import './AllLessons.scss';

export const AllLessons = () => {
    const navigate = useNavigate();

    const handleNavigate = (link: string) => navigate(link);

    return (
        <div className='lessons'>
            <BackHeader backLink={'/lessons'}><h3 className='lessons_title'>Урок 1</h3></BackHeader>
            <div className='flex fd-column justify-center gap-32'>
                {currentLesson.map(lesson => (
                    <Fragment key={lesson.videoLink}>
                        <LessonItem lesson={lesson}/>
                    </Fragment>
                ))}
            </div>
            <div className='flex fd-column gap-20 align-center lessons_btn'>
                <Button icon={<PlayItem/>} variant='primary'>Смотреть</Button>
                <Button variant='secondary'>Конспект</Button>
                <Button variant='secondary' onClick={() => handleNavigate(`test`)}>Пройти тест</Button>
            </div>
        </div>
    );
};

