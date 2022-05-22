import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { MEETING_FREQUENCY_OPTIONS } from './meetingFrequencyOptions.config';

const MeetingFrequencySelector = ({ value, onChange}) => {
    const menuItems = [];
    for (let i in MEETING_FREQUENCY_OPTIONS) {
        const value = MEETING_FREQUENCY_OPTIONS[i];
        menuItems.push(<MenuItem value={value} key={i}>{value}</MenuItem>);
    }

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
                {menuItems}
            </Select>
        </FormControl>
    </>;
};

export default MeetingFrequencySelector;
