
import { useCallback, useEffect, useState } from 'react';

let worker = new Worker('hellworker.ts');

const WorkComponent = (props: { count: number; sendMessageToWorker: (arg0: number) => void }) => {
    const { sendMessageToWorker, count } = props;

    const handleSendMessageToWorker = () => {
        sendMessageToWorker(count);
    };

    const handleResetWorker = () => {
        sendMessageToWorker(1);
    };

    return (
        <div>
            <button onClick={handleSendMessageToWorker}>Click Worker</button>
            <button onClick={handleResetWorker}>Reset</button>
        </div>
    );
};

export function ExWorker() {
    const [count, setCount] = useState(2);
    const sendMessageToWorker = useCallback((data: number) => worker.postMessage(data), [worker]);

    const onKillWorker = () => worker.terminate();

    useEffect(() => {
        worker.onmessage = (event: MessageEvent) => {
            const { data } = event;
            setCount(data);
        };
    }, [worker]);

    return (
        <div>
            <span>{count}</span>
            <WorkComponent count={count} sendMessageToWorker={sendMessageToWorker} />
            <button onClick={() => onKillWorker()}>Kill Worker</button>
        </div>
    );
}
