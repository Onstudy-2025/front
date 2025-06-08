import {LessonImage, WomanImage} from "shared/images";
import type {IModule, ITestResult, ITopic} from "shared/interfaces";
import type {ILesson} from "shared/interfaces";

export const allTopics: ITopic[] = [
    {
        id: 1,
        title: "IELTS",
        image: WomanImage as string,
        isFinished: true
    },
    {
        id: 2,
        title: "TOEFL",
        image: WomanImage as string,
        isFinished: false
    },
    {
        id: 3,
        title: "SAT",
        image:  WomanImage as string,
        isFinished: true
    }
]

export const allModules: IModule[] = [
    {
        id: 1,
        title: "Вводный урок 1",
        lessons: [
            { id: 1, title: "Урок 1", duration: 33 },
            { id: 2, title: "Урок 2", duration: 33 },
            { id: 3, title: "Урок 3", duration: 33 },
            { id: 4, title: "Урок 4", duration: 33 },
            { id: 5, title: "Урок 5", duration: 33 },
            { id: 6, title: "Урок 6", duration: 33 },

        ]
    },
    {
        id: 2,
        title: "Вводный урок 2",
        lessons: [
            { id: 1, title: "Урок 1", duration: 33 }
        ]
    },
    {
        id: 3,
        title: "Вводный урок 3",
        lessons: [
            { id: 1, title: "Урок 1", duration: 33 },
            { id: 2, title: "Урок 2", duration: 33 }
        ]
    },
    {
        id: 4,
        title: "Вводный урок 4",
        lessons: [
            { id: 1, title: "Урок 1" , duration: 33}
        ]
    },
]

export const currentLesson: ILesson[] = [
    {
        videoLink: 'link',
        description: "Each single-property transition describes the transition that should be applied to a single property or all properties. It includes:",
        videoCover: LessonImage as string,
    },
    {
        videoLink: "https://youtube.com/...",
        description: "Each single-property transition describes the transition that should be applied to a single property or all properties. It includes:",
        videoCover: LessonImage as string,
    }
]

export const allQuestions = [
    {
        id: 1,
        title: "Где тут Present Perfect Continuous?",
        variants: [
            { id: 1, label: "I play football every weekend" },
            { id: 2, label: "I have been reading this book since morning" },
            { id: 3, label: "I will go to the store" },
            { id: 4, label: "She speaks English well" },
        ],
    },
    {
        id: 2,
        title: "Выберите правильный перевод: 'Он только что ушёл'",
        variants: [
            { id: 5, label: "He has just left" },
            { id: 6, label: "He is leaving now" },
            { id: 7, label: "He will leave soon" },
            { id: 8, label: "He left every day" },
        ],
    },
    {
        id: 3,
        title: "В каком предложении используется Past Simple?",
        variants: [
            { id: 9, label: "She is watching TV now" },
            { id: 10, label: "They played football yesterday" },
            { id: 11, label: "He has done his homework" },
            { id: 12, label: "I am going to the park" },
        ],
    },
    {
        id: 4,
        title: "Какой вопрос построен правильно?",
        variants: [
            { id: 13, label: "Do she like coffee?" },
            { id: 14, label: "Does she likes coffee?" },
            { id: 15, label: "Does she like coffee?" },
            { id: 16, label: "Like she does coffee?" },
        ],
    },
    {
        id: 5,
        title: "Какой вариант перевода наиболее точный: 'I have never been to London'?",
        variants: [
            { id: 17, label: "Я был в Лондоне много раз" },
            { id: 18, label: "Я еду в Лондон" },
            { id: 19, label: "Я никогда не был в Лондоне" },
            { id: 20, label: "Я живу в Лондоне" },
        ],
    },
];

export const testResult: ITestResult = {
    grade: 'bad',
    correctAnswersCount: 10,
    numberOfQuestions: 10,
    correctAnswersPercent: 100,
}
