import {GradientCircle} from "shared/ui";
import {AllTopics} from "entities/topic";

import './MainPage.scss';

export const MainPage = () => {
    return (
        <div className='main'>
            <GradientCircle className='main_gradient1'/>
            <GradientCircle className='main_gradient2'/>
            <AllTopics/>
        </div>
    );
};