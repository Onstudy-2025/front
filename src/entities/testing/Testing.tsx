import { useState } from "react";

const questions = [
    {
        question: "Какой язык используется для стилизации веб-страниц?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctIndex: 1,
    },
    {
        question: "Что такое React?",
        options: ["Фреймворк", "Язык", "Библиотека", "IDE"],
        correctIndex: 2,
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (index) => {
        const isCorrect = index === questions[currentQuestion].correctIndex;
        if (isCorrect) setScore((prev) => prev + 1);

        const next = currentQuestion + 1;
        if (next < questions.length) {
            setCurrentQuestion(next);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div>
                <h2>Результат: {score} из {questions.length}</h2>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div>
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((opt, idx) => (
                    <li key={idx}>
                        <button onClick={() => handleAnswerClick(idx)}>{opt}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
