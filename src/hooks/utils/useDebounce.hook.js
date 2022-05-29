import {useCallback, useState} from 'react';

const useDebounce = (delay = 1000) => {
    const [timerId, setTimerId] = useState();

    const debounce = useCallback(func => {
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }

        const timer = setTimeout(() => func(), delay);
        setTimerId(timer);
    }, [delay, timerId]);

    return debounce;
};

export default useDebounce;
