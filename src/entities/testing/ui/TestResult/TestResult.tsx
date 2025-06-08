import type {FC} from "react";
import {useParams} from "react-router";

import {BackHeader} from "shared/ui";
import type {ITestResult} from "shared/interfaces";
import {RatingResult} from "entities/testing";

import './TestResult.scss'

interface ComponentProps {
    result: ITestResult;
}

export const TestResult: FC<ComponentProps> = ({result}) => {
    const {module, id} = useParams();

    return (
        <div className='result'>
            <BackHeader backLink={`/lessons/${module}/${id}`}><h3 className='result_title'>Оценка по баллам</h3></BackHeader>
            <div className='result_container'>
                <RatingResult result={result}/>
            </div>
        </div>
    );
};

