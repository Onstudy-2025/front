import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "widgets/Layout";
import {AboutPage, ListOfTopics, MainPage, CurrentLesson, TestPage} from "pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <MainPage/>,
            },
            {
                path: 'lessons',
                element: <ListOfTopics/>,
            },
            {
                path: 'lessons/:module/:id',
                element: <CurrentLesson/>,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
            {
                path: 'test',
                element: <TestPage/>,
            },
        ],
    },
]);
