import {useLocation} from "react-router";
import {GradientCircle, NavButton} from "shared/ui";
import {AboutSvg, HomeSvg, TopicsSvg} from "shared/icons";

import './Footer.scss';

export const Footer = () => {
    const { pathname } = useLocation();
    const getGradientPosition = () => {
        switch (true) {
            case pathname === '/':
                return 'left';
            case pathname.includes('/lessons'):
                return 'center';
            case pathname === '/about':
                return 'right';
            default:
                return 'left';
        }
    };

    const getStyle = (isActive: boolean) =>
        isActive ? 'active link' : 'link';


    return (
        <footer className='footer flex justify-center'>
            <div className='flex'>
                <GradientCircle className={`footer-highlight ${getGradientPosition()}`}/>
                <NavButton
                    icon={<HomeSvg/>}
                    title='Главная'
                    getStyle={getStyle}
                    link='/'
                />
                <NavButton
                    icon={<TopicsSvg/>}
                    title='Список тем'
                    getStyle={getStyle}
                    link='/lessons'
                />
                <NavButton
                    icon={<AboutSvg/>}
                    title='О курсе'
                    getStyle={getStyle}
                    link='/about'
                />
            </div>
        </footer>
    )
}