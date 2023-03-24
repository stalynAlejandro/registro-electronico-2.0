import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Home />,
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
