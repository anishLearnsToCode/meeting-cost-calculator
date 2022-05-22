import React, { useMemo } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Stack, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const MeetingDateTimePickerSection = ({ date, setDate, startTime, setStartTime, endTime, setEndTime }) => {
    const endTimeLessThanStartTime = useMemo(() => endTime < startTime, [startTime, endTime]);

    return <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="Meeting Date"
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    onChange={setDate}
                    renderInput={(params) => <TextField {...params} />}
                />

                <Box>
                    <TimePicker
                        label="Start Time"
                        value={startTime}
                        onChange={setStartTime}
                        renderInput={(params) => <TextField {...params} />}
                        ampm={false}
                    />

                    <TimePicker
                        label="End Time"
                        value={endTime}
                        onChange={setEndTime}
                        renderInput={(params) => <TextField {...params} />}
                        ampm={false}
                    />
                </Box>

                {endTimeLessThanStartTime && <p>End time can't be less than start time !!</p>}
            </Stack>
        </LocalizationProvider>
    </>;
};

export default MeetingDateTimePickerSection;
