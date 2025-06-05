import {allTopics} from "shared/data.ts";
import {TopicItem} from "entities/topic";
import {Fragment} from "react";

export const AllTopics = () => {
    return (
        <div className='flex df-column justify-center gap-32 align-center'>
            {allTopics.map((topic) => (
                <Fragment key={topic.id} >
                    <TopicItem topic={topic} />
                </Fragment>
            ))}
        </div>
    );
};

