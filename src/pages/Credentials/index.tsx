import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Fade } from '@mui/material';

export function Credentials() {
    const [result, setResult] = useState('Calculating....');
    const [isLoading, setIsLoading] = useState(false);

    const fn = () => {
        setResult('');
        setIsLoading(true);

        const worker = new Worker('hellworker.ts');
        worker.postMessage(null);

        worker.onmessage = function (e) {
            setIsLoading(false);
            setResult(e.data);
        };
    };

    return (
        <Fade in timeout={1000}>
            <div>
                <Header />
                <h2 style={{ marginTop: 90 }}>Result: {isLoading ? 'Loading' : result}</h2>
                <button onClick={fn}>Start</button>
                <Footer />
            </div>
        </Fade>
    );
}
