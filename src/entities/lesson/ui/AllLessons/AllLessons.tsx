import {Fragment} from "react";
import {Link} from "react-router";

import {ArrowSVG, PlayItem} from "shared/icons";
import {currentLesson} from "shared/data.ts";
import {LessonItem} from "entities/lesson";

import './AllLessons.scss';
import {Button} from "shared/ui";

export const AllLessons = () => {
    return (
        <div className='lessons'>
            <div className='lessons_header flex justify-center align-center mb-24'>
                <Link to={'/lessons'} className='lessons_back'><ArrowSVG/></Link>
                <h3>Урок 1</h3>
            </div>
            <div className='flex df-column justify-center gap-32'>
                {currentLesson.map(lesson => (
                    <Fragment key={lesson.videoLink}>
                        <LessonItem lesson={lesson}/>
                    </Fragment>
                ))}
            </div>
            <div className='flex df-column gap-20 align-center lessons_btn'>
                <Button icon={<PlayItem/>} variant='primary'>Смотреть</Button>
                <Button variant='secondary'>Конспект</Button>
                <Button variant='secondary'>Пройти тест</Button>
            </div>
        </div>
    );
};

