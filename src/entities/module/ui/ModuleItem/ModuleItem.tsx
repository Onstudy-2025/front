import type {ILessonList, IModule} from "shared/interfaces";
import type {FC} from "react";
import {Fragment, useEffect, useState} from "react";
import {Button, LessonLabel} from "shared/ui";

interface ComponentProps {
    module: IModule;
}

export const ModuleItem: FC<ComponentProps> = ({module}) => {
    const [lessons, setLessons] = useState<ILessonList[] | []>([]);
    const [toggle, setToggle] = useState<boolean>(false);
    const openAllLessons = () => setToggle(!toggle);

    useEffect(() => {
        if(toggle) {
            setLessons(module.lessons)
        } else {
            setLessons(module.lessons.slice(0, 4))
        }
    }, [toggle])

    return (
        <div className='flex fd-column justify-center gap-16 '>
            {lessons.map(lesson => (
                <Fragment key={lesson.id}>
                    <LessonLabel lesson={lesson} module={module.id}/>
                </Fragment>
            ))}
            {module.lessons.length > 4 && <Button variant='link' onClick={openAllLessons}>{toggle ? 'Скрыть' : 'Показать еще'}</Button>}
        </div>
    );
};

