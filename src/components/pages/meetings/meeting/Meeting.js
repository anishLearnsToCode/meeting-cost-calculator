import React, { useState } from 'react';

import { Box, Typography, Chip, Button } from '@mui/material';
import { getFormattedDate, getFormattedTime } from '../../../../utils/time.utils';
import useEmployees from '../../../../hooks/useEmployees.hook';
import CurrencySelectorButtonGroup from '../../../../ui/currency-selector-button-group';
import useAmountInCurrency from '../../../../hooks/useAmountInCurrency.hook';

const Meeting = ({ meeting, onDeleteMeeting }) => {
    const { employees } = useEmployees();

    const Participants = [];
    for (let i of Array.from(meeting.participants)) {
        const employee = employees.get(i);
        Participants.push(<Chip key={i} label={`${employee.firstName} ${employee.lastName}`} sx={{mr: 1}}/>);
    }

    const [currency, setCurrency] = useState('chf');
    const meetingCost = useAmountInCurrency(currency, meeting.meetingCostChf);

    return <>
        <Box sx={{border: '1px solid grey', borderRadius: '4px', padding: 2, mb: 3}}>
           <Typography variant='h6'>{meeting.title}</Typography>
           <Typography paragraph>{meeting.agenda}</Typography>

            {meeting.date && <Chip label={getFormattedDate(meeting.date)} variant='outlined'/>}
            {meeting.startTime && meeting.endTime && <Chip
               label={`${getFormattedTime(meeting.startTime)}-${getFormattedTime(meeting.endTime)}`}
               sx={{ml: 1}}
               variant='outlined'
           />}
            <Chip label={meeting.frequency} sx={{ml: 1}} variant='outlined'/>

            <Box mt={2}>
                {Participants}
            </Box>

            <Box mt={3}>
                <CurrencySelectorButtonGroup value={currency} onChange={setCurrency} />
                <Typography paragraph mt={2}>
                    {currency.toUpperCase()} {meetingCost}
                </Typography>
            </Box>

            <Button
                onClick={onDeleteMeeting}
                color='error'
                variant='contained'
                sx={{mt: 2}}
            >
                Delete Meeting
            </Button>
        </Box>
    </>;
};

export default Meeting;
