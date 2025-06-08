export interface IQuestionVariant {
    id: number;
    label: string;
}

export interface ITestQuestion {
    id: number;
    title: string;
    variants: IQuestionVariant[];
}

type IRatingVariants = 'great' | 'good' | 'fair' | 'bad';

export interface ITestResult {
    grade: IRatingVariants,
    correctAnswersCount: number,
    correctAnswersPercent: number,
    numberOfQuestions: number,
}

export interface IUserTestAnswers {
    answers: {
        questionId: number;
        answerId: number;
    }[];
}