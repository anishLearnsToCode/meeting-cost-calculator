import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MeetingFrequencySelector = ({ value, onChange}) => {
    return <>
        <FormControl fullWidth>
            <InputLabel id="freq">Meeting Frequency</InputLabel>
            <Select
                labelId="freq"
                id="freq"
                value={value}
                label="Meeting Frequency"
                onChange={event => onChange(event.target.value)}
            >
                <MenuItem value={'Does Not Repeat'}>Does Not Repeat</MenuItem>
                <MenuItem value={'Repeats daily (selected day + weekdays)'}>Repeats daily (selected day + weekdays)</MenuItem>
                <MenuItem value={'Weekly'}>Weekly</MenuItem>
                <MenuItem value={'Monthly'}>Monthly</MenuItem>
            </Select>
        </FormControl>
    </>;
};

export default MeetingFrequencySelector;
