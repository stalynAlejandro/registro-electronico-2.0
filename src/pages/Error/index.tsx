import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorProps {
    statusText: string;
    message: string;
}

export function Error() {
    const { statusText = '', message = '' } = useRouteError() as ErrorProps;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{statusText || message}</i>
            </p>
        </div>
    );
}
