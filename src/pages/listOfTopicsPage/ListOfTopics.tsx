import {AllModules} from "entities/module";
import {Button} from "shared/ui";

import './ListOfTopics.scss';

export const ListOfTopics = () => {
    return (
        <div>
            <h2 className='title mb-24'>Выберите модуль</h2>
            <AllModules/>
            <Button variant='primary' className='topics_btn'>База знаний</Button>
        </div>
    );
};

