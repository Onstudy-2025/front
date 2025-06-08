import type {FC} from "react";

import {Button, GradientCircle} from "shared/ui";
import {LockItem, PlayItem} from "shared/icons";
import type {ITopic} from "shared/interfaces";

import './TopicItem.scss';

interface ComponentProps {
    topic: ITopic;
}

export const TopicItem: FC<ComponentProps> = ({topic}) => {
    if (!topic.isFinished) {
        return (
            <div className='topic_process flex fd-column justify-center align-center'>
                <div className='flex justify-center align-center'>
                    <LockItem/>
                </div>
                <p>{topic.title} in development</p>
            </div>
        )
    }

    return (
        <div className={`${topic.isFinished ? 'topic_item flex fd-column justify-sb' : 'topic_process'}`}>
            <div>
                <div className='topic_text'>
                    <h2 className='topic_title'>Курс</h2>
                    <h2 className='topic_theme'>{topic.title}</h2>
                </div>
                <GradientCircle className='topic_gradient'/>
                <img src={topic.image} alt='image' className='topic_image'/>
            </div>
            <Button icon={<PlayItem/>} className='topic_btn' variant='circle'>Смотреть</Button>
        </div>
    )
};
