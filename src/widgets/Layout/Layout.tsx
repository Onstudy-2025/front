import {Outlet} from "react-router";
import {Footer} from "widgets/Footer";
import {useEffect} from "react";

export const Layout = () => {
    useEffect(() => {
        const tg = window.Telegram?.WebApp;
        tg?.expand();
        if (tg?.initData) {
            console.log(tg?.initData)
        }
        console.log('hi')
    }, []);


    return (
        <div className='container'>
            <Outlet/>
            <Footer/>
        </div>
    );
}