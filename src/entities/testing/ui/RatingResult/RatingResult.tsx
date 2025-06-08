import type {FC} from "react";
import {useNavigate} from "react-router";

import type {ITestResult} from "shared/interfaces";
import {SmileSvg} from "shared/icons";
import {Button} from "shared/ui";

import './RatingResult.scss';
import {Fragment} from "react";

interface IButton {
    variant: 'primary' | 'secondary' | 'link' | 'circle';
    text: string;
    navLink: string;
}

interface FeedbackBlock {
    text: string;
    ratingDesc: string;
    recommendation: string[];
    btn: IButton[];
}

const ratingTemplate: Record<string, FeedbackBlock> = {
    great: {
        text: 'Отлично!',
        ratingDesc: '',
        recommendation: [
            'Вы блестяще усвоили материал этого урока.',
            'Следующий шаг — переход к следующей теме, чтобы накапливать уверенность по всем разделам экзамена.'
        ],
        btn: [
            {variant: 'primary', text: 'Перейти к следующему уроку', navLink: 'nextLesson'},
        ],
    },
    good: {
        text: 'Хорошо',
        ratingDesc: 'У вас хороший уровень понимания темы, но есть нюансы, которые стоит доработать.',
        recommendation: [
            "Просмотреть короткое повторение",
            "Пройти тест ещё раз"
        ],
        btn: [
            {variant: 'primary', text: 'Повторить материал', navLink: 'nextLesson'},
            {variant: 'secondary', text: 'Пройти тест ещё раз', navLink: 'textRepeat'},
        ],
    },
    fair: {
        text: 'Есть над чем поработать',
        ratingDesc: 'Понимание темы пока на среднем уровне. Чтобы перейти дальше — важно укрепить базу.',
        recommendation: [
            "Посмотри свои ошибки"
        ],
        btn: [
            {variant: 'primary', text: 'Повторить урок', navLink: 'repeatLessonLink'},
        ],
    },
    bad: {
        text: 'Ничего страшного\n — это часть пути!',
        ratingDesc: 'Скорее всего, тема оказалась новой или сложной.',
        recommendation: [
            "Начни с разбора теории и простых примеров. Это поможет легко закрыть пробелы."
        ],
        btn: [
            {variant: 'primary', text: 'Повторить тему с начала', navLink: 'nextLesson'},
        ],
    }
}

interface ComponentProps {
    result: ITestResult;
}

export const RatingResult: FC<ComponentProps> = ({result}) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='rating_rate flex justify-center align-center'>
                <SmileSvg/>
                <p>{ratingTemplate[result.grade].text}</p>
            </div>
            <p className='rating_desc'>{result.correctAnswersCount} из {result.numberOfQuestions} правильных
                ответов</p>
            <p className='rating_desc'>({result.correctAnswersPercent}-100%)</p>
            <div className='rating'>
                {ratingTemplate[result.grade].ratingDesc &&
                    <p className='rating_grade_desc'>{ratingTemplate[result.grade].ratingDesc}</p>}
                {result.grade !== 'great' && <h4 className='rating_title'>Мы рекомендуем:</h4>}
                <ul className={`rating_rec flex fd-column gap-20 ${ratingTemplate[result.grade].ratingDesc ? '' : 'no_desc'}`}>
                    {ratingTemplate[result.grade].recommendation.map((rec, ind) => <li key={ind}>{rec}</li>)}
                </ul>
                <div className='rating_btns'>
                    {ratingTemplate[result.grade].btn.map((btn: IButton, ind: number) => (
                        <Fragment key={ind}>
                            <Button
                                variant={btn.variant}
                                onClick={() => navigate(btn.navLink)}
                            >
                                {btn.text}
                            </Button>
                        </Fragment>
                    ))}
                    <Button variant='secondary'>Посмотреть свои ошибки</Button>
                </div>
            </div>
        </>
    );
};

