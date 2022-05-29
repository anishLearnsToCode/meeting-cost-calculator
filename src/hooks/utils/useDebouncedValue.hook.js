import {useEffect, useState} from "react";

const useDebouncedValue = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeOutId = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timeOutId);
    }, [delay, value]);

    return debouncedValue;
};

export default useDebouncedValue;
