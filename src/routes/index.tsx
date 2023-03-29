import { Auth } from '../pages/Auth';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { Welcome } from '../pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Welcome />,
        errorElement: <Error />,
    },
    {
        path: '/auth',
        element: <Auth />,
        errorElement: <Error />,
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <Error />,
    },
    {
        path: '/error',
        element: <Error />,
        errorElement: <Error />,
    },
]);
