import {allQuestions, testResult} from "shared/data.ts";
import {useState} from "react";
import {TestProgress, TestResult} from "entities/testing";

export const TestPage = () => {
    const [finishedTest, setFinishedTest] = useState<boolean>(true)

    const onFinish = (data: any) => {
        console.log(data)
        setFinishedTest(true)
    }

    return (
        <>
            {finishedTest ? <TestResult result={testResult}/> :  <TestProgress questions={allQuestions} onFinish={onFinish}/>}
        </>
    );
};

