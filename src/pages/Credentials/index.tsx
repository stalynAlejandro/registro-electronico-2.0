import React, { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Fade } from '@mui/material';

export function Credentials() {
    const [result, setResult] = useState('Calculating....');
    const [input2, setInput2] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange2 = (event: { target: { value: React.SetStateAction<string> } }) => {
        setInput2(event.target.value);
    };

    const fn = () => {
        const worker = new Worker('hellworker.ts');
        setResult('');
        setIsLoading(true);
        worker.postMessage(null);
        worker.onmessage = function (e) {
            setIsLoading(false);
            setResult(e.data);
            worker.terminate();
        };
    };

    return (
        <Fade in timeout={1000}>
            <div>
                <Header />
                <h2 style={{ marginTop: 90 }}>Result: {isLoading ? 'Loading' : result}</h2>
                <button onClick={fn}>Start</button>
                <div>
                    <label>
                        <input type="text" value={input2} onChange={handleInputChange2} />
                    </label>
                </div>
                <Footer />
            </div>
        </Fade>
    );
}
