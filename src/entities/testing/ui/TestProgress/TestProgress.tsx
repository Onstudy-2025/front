import type {FC} from "react";
import {useState} from "react";

import {TestHeader} from "entities/testing";
import {TestQuiz} from "entities/testing";
import type {ITestQuestion, IUserTestAnswers} from "shared/interfaces";

interface ComponentProps {
    questions: ITestQuestion[];
    onFinish?: (data: IUserTestAnswers) => void;
}

export const TestProgress: FC<ComponentProps> = ({onFinish, questions}) => {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<
        { questionId: number; answerId: number }[]
    >([]);


    const handleAnswer = (answerId: number) => {
        const q: ITestQuestion = questions[current];
        setAnswers((prev) => [...prev, { questionId: q.id, answerId }]);

        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            const data = { answers: [...answers, { questionId: q.id, answerId }] };
            onFinish?.(data);
        }
    };

    const question = questions[current];

    return (
        <div>
            <TestHeader currentQuestion={current + 1} numberOfQuestions={questions.length}/>
            <TestQuiz question={question} handleAnswer={handleAnswer} currentQuestion={current + 1}/>
        </div>
    );
};
