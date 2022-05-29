import {useState} from 'react';

const useDebounce = (debounceDelayMilliSecs = 500) => {
    const [debounceTimerID, setDebounceTimerID] = useState(0);

    return func => {
        if (debounceTimerID) {
            clearTimeout(debounceTimerID);
        }
        setDebounceTimerID(setTimeout(() => func(), debounceDelayMilliSecs));
    };
};

export default useDebounce;