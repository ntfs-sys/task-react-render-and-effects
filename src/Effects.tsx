import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState<number | string>(-1);

    useEffect(() => {
        setMessage(-1);

        const handleUpdate = (msg: number) => {
            setMessage(msg);
        };

        subscribe(props.sourceId, handleUpdate);

        return () => {
            unsubscribe(props.sourceId, handleUpdate);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
