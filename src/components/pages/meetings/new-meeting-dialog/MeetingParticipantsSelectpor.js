import React from 'react';

import { Autocomplete, TextField } from '@mui/material';

const MeetingParticipantsSelector = ({ employees, getEmployeeLabel, onChange }) => {

    return <>
        <Autocomplete
            multiple
            id="people"
            options={employees}
            getOptionLabel={getEmployeeLabel}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Meeting Participants"
                    placeholder="Enter people you wish to invite to meeting"
                />
            )}
            onChange={(event, value) => onChange(value)}
            sx={{mt: 3}}
        />
    </>;
};

export default MeetingParticipantsSelector;
