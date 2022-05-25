import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'CHF',
        label: 'CHF',
    },
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
];

const CurrencySelector = ({ value, onChange }) => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '15ch' },
            }}
            noValidate
            autoComplete="off"
            mt={3}
        >
            <TextField
                id="outlined-select-currency"
                select
                label="Currency"
                value={value}
                onChange={event => onChange(event.target.value)}
                helperText=""
            >
                {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default CurrencySelector;
