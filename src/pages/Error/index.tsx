import { useRouteError } from 'react-router-dom';

export function Error() {
    let error = useRouteError() as { message: string };

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error?.message}</p>
        </div>
    );
}
