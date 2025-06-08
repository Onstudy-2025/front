import type {FC} from "react";
import type {ITestQuestion} from "shared/interfaces";

import {Button} from "shared/ui";
import {useState} from "react";
import {CheckSvg} from "shared/icons";

import './TestQuiz.scss';

interface ComponentProps {
    question: ITestQuestion;
    currentQuestion: number;
    handleAnswer: (optionId: number) => void;
}

export const TestQuiz: FC<ComponentProps> = (props) => {
    const [selected, setSelected] = useState<number | null>(null);
    const {question, handleAnswer, currentQuestion} = props;

    return (
        <div className='quiz'>
            <h3 className='quiz_number'>Вопрос №{currentQuestion}</h3>
            <h3 className='quiz_question'>{question.title}</h3>
            <ul className="quiz_options flex fd-column gap-20">
                {question.variants.map((variant) => (
                    <li
                        key={variant.id}
                        className={`quiz_option ${selected === variant.id ? 'quiz_option_selected' : ''}`}
                        onClick={() => setSelected(variant.id)}
                    >
                        <div className='quiz_option-content'>
                            <span>{variant.label}</span>
                            <span className={`quiz_circle ${selected === variant.id ? 'quiz_selected': ''}`}>
                                {selected === variant.id && <CheckSvg/>}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <Button
                disabled={!selected}
                onClick={() => {
                    selected && handleAnswer(selected)
                    setSelected(null)
                }}
                className='quiz_btn'
                variant='primary'
            >
                Далее
            </Button>
        </div>
    );
};

