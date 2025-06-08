import { createBrowserRouter } from 'react-router-dom';
import { Layout } from "widgets/Layout";
import {AboutPage, ModulesPage, MainPage, CurrentLesson, TestPage} from "pages";

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
                element: <ModulesPage/>,
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
                path: 'lessons/:module/:id/test',
                element: <TestPage/>,
            },
        ],
    },
]);
