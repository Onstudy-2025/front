import {createRoot} from 'react-dom/client';
import 'shared/styles/_global.scss';
import {router} from "app/routes/AppRoutes.tsx";
import {RouterProvider} from "react-router-dom";

declare global {
    interface Window {
        Telegram: any;
    }
}

createRoot(
    document.getElementById('root') as HTMLElement,
).render( <RouterProvider router={router} />)
