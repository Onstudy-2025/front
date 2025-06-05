import type {IModule} from "shared/interfaces";
import type {FC} from "react";
import {Fragment} from "react";
import {LessonLabel} from "shared/ui";

interface ComponentProps {
    module: IModule;
}

export const ModuleItem: FC<ComponentProps> = ({module}) => {
    return (
        <div className='flex df-column justify-center gap-16'>
            {module.lessons.map(lesson => (
                <Fragment key={lesson.id}>
                    <LessonLabel lesson={lesson} module={module.id}/>
                </Fragment>
            ))}
        </div>
    );
};

