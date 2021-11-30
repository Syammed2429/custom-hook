import { useState, useEffect } from 'react';


export const useTimeOut = (value) => {
    //Hooks
    const [ready, setReady] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(false)
        }, value)

        return () => {
            clearTimeout(timer)
        }
    }, [value]);

    return ready;

}
