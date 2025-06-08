import type {FC} from "react";
import {PuzzleSvg} from "shared/icons";

import './TestHeader.scss';

interface ComponentProps {
    currentQuestion: number;
    numberOfQuestions: number;
}

export const TestHeader: FC<ComponentProps> = (props) => {
    const {currentQuestion, numberOfQuestions} = props;
    const percent = Math.min(Math.max((currentQuestion / numberOfQuestions) * 100, 0), 100);

    return (
        <div className='flex justify-center align-center gap-32'>
            <div className="progress_track">
                <div
                    className="progress_fill"
                    style={{width: `${percent}%`}}
                />
            </div>
            <div className='flex justify-center align-center progress_currentInfoBlock'>
                <PuzzleSvg/>
                {currentQuestion} из {numberOfQuestions}
            </div>
        </div>
    );
};

