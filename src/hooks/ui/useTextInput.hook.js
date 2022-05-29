import { useMemo, useState } from 'react';

const useTextInput = () => {
    const [value, setValue] = useState();
    const [fieldTouched, setFieldTouched] = useState(false);

    const updateValue = event => {
        setFieldTouched(true);
        setValue(event.target.value);
    };

    const error = useMemo(
        () => fieldTouched && (value === undefined || value === ''),
        [fieldTouched, value]
    );

    return {
        value,
        updateValue,
        error,
    };
};

export default useTextInput;
