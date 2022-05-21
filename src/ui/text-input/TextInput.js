import React, {useMemo, useState} from 'react';
import {TextField} from "@mui/material";

const useTextInput = (
    id,
    label,
    required = false,
    initialValue = undefined,
    errorMessage = undefined,
    type = 'name',
) => {
    const [value, setValue] = useState(initialValue);
    const [fieldTouched, setFieldTouched] = useState(false);

    const updateValue = event => {
        setFieldTouched(true);
        setValue(event.target.value);
    };

    const error = useMemo(
        () => value === '' || value === undefined,
        [value]
    );

    const Component = () => {
        return <TextField
            id={id}
            label={label}
            type={type}
            fullWidth
            required={required}
            value={value}
            onChange={event => updateValue(event)}
            error={error}
            helperText={errorMessage}
            sx={{mt: 2, mb: 2}}
        />;
    };

    return {
        Component,
        error,
        value
    };
};

const TextInput = () => {};

export default useTextInput;
