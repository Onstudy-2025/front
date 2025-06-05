export interface ILessonList {
    id: number;
    title: string;
    duration: number;
};

export interface IModule {
    id: number;
    title: string;
    lessons: ILessonList[];
};
