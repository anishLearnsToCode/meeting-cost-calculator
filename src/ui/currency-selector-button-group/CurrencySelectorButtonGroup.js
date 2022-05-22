import React from 'react';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';


const CurrencySelectorButtonGroup = ({ value, onChange }) => {
    return <>
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={event => onChange(event.target.value)}
            aria-label="text alignment"
            size='small'
        >
            <ToggleButton value="chf" aria-label="left aligned">
                CHF
            </ToggleButton>
            <ToggleButton value="eur" aria-label="centered">
                € Euro
            </ToggleButton>
            <ToggleButton value="usd" aria-label="right aligned">
                $ USD
            </ToggleButton>
        </ToggleButtonGroup>
    </>;
};

export default CurrencySelectorButtonGroup;
