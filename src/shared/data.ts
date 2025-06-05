import {LessonImage, WomanImage} from "shared/images";
import type {IModule, ITopic} from "shared/interfaces";
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
            { id: 2, title: "Урок 2", duration: 33 }
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