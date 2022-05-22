import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';
import CurrencySelectorButtonGroup from '../../../../ui/currency-selector-button-group';
import MeetingDateTimePickerSection from './MeetingDateTimePickerSection';
import useNewMeeting from '../../../../hooks/useNewMeeting.hook';
import MeetingFrequencySelector from './MeetingFrequencySelector';
import MeetingParticipantsSelector from "./MeetingParticipantsSelectpor";


const CreateNewMeetingDialog = ({ isOpen, onClose }) => {
    const {
        title,
        setTitle,
        agenda,
        setAgenda,
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        employees,
        getEmployeeLabel,
        updatePeopleInMeeting,
        frequency,
        setFrequency,
        currency,
        setCurrency,
        meetingCost,
        isButtonDisabled,
        createNewMeeting,
        clearAllData,
    } = useNewMeeting();

    const onCreateNewMeeting = () => {
        createNewMeeting();
        onClose();
    };

    return <>
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Enter Meeting Details</DialogTitle>
            <DialogContent>
                <TextField
                    id='meeting'
                    label='Meeting Title'
                    type='text'
                    fullWidth
                    required={true}
                    value={title}
                    onChange={setTitle}
                    sx={{mb: 2, mt: 1}}
                />

                <TextField
                    id='agenda'
                    label='Meeting Agenda'
                    type='text'
                    fullWidth
                    multiline
                    value={agenda}
                    onChange={setAgenda}
                    sx={{mb: 3}}
                />

                <MeetingDateTimePickerSection
                    date={date}
                    setDate={setDate}
                    startTime={startTime}
                    setStartTime={setStartTime}
                    endTime={endTime}
                    setEndTime={setEndTime}
                />

                <MeetingParticipantsSelector
                    employees={employees}
                    getEmployeeLabel={getEmployeeLabel}
                    onChange={updatePeopleInMeeting}
                />

                <Box sx={{ minWidth: 120, mt: 4}}>
                    <MeetingFrequencySelector value={frequency} onChange={setFrequency} />
                </Box>

                <Typography variant='h6' mt={4} mb={1}>Meeting Cost</Typography>

                <CurrencySelectorButtonGroup value={currency} onChange={setCurrency} />

                <Typography paragraph mt={2}>
                    {currency.toUpperCase()} {meetingCost}
                </Typography>
            </DialogContent>

            <DialogActions sx={{mb: 2}}>
                <Button onClick={onCreateNewMeeting} variant='contained' disabled={isButtonDisabled}>
                    Create Meeting
                </Button>
            </DialogActions>
        </Dialog>
    </>;
};

export default CreateNewMeetingDialog;
