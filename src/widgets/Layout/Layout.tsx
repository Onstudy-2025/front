import {Outlet} from "react-router";
import {Footer} from "widgets/Footer";

export const Layout = () => (
    <div className='container'>
        <Outlet/>
        <Footer/>
    </div>
);