import React, {useEffect, useMemo, useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Stack, Autocomplete, InputLabel, Select, MenuItem, FormControl, Typography, ToggleButtonGroup, ToggleButton,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import useTextInput from '../../../../hooks/useTextInput.hook';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import useEmployees from '../../../../hooks/useEmployees.hook';
import { convertFromChfTo, convertToChf } from '../../../../utils/currency.utils';
import { MILLISECONDS_IN_HOUR, WORKING_HOURS_PER_YEAR } from '../../../../utils/time.utils';
import CurrencySelectorButtonGroup from "../../../../ui/currency-selector-button-group";


const CreateNewMeetingDialog = ({ isOpen, onClose }) => {
    const {
        value: title,
        updateValue: setTitle,
    } = useTextInput();

    const {
        value: agenda,
        updateValue: setAgenda,
    } = useTextInput();

    const { employeesTableRepresentation: employees, employees: employeeData } = useEmployees();

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [peopleInvitedToMeeting, setPeopleInvitedToMeeting] = useState(new Set());
    const [frequency, setFrequency] = useState('Does Not Repeat');
    const endTimeLessThanStartTime = useMemo(() => endTime < startTime, [startTime, endTime]);
    const [currency, setCurrency] = useState('chf');

    const getEmployeeLabel = employee => {
        return `${employee.firstName} ${employee.lastName} (#${employee.id})`;
    };

    const updatePeopleInMeeting = people => {
        const set = new Set();
        for (let person of people) {
            set.add(person.id);
        }
        setPeopleInvitedToMeeting(set);
    };

    useEffect(() => {
        startTime.setSeconds(0);
        endTime.setSeconds(0);
        setStartTime(startTime);
        setEndTime(endTime);
    }, [startTime, endTime]);

    const meetingDurationHours = useMemo(() => {
        return (endTime - startTime) / MILLISECONDS_IN_HOUR;
    }, [startTime, endTime]);

    const sumOfAnnualSalariesOfMeetingParticipants = useMemo(() => {
        let result = 0;
        for (let employeeId of peopleInvitedToMeeting) {
            const employee = employeeData.get(employeeId);
            result += convertToChf(employee.currency, employee.annualSalary);
        }
        console.log(result);
        return result;
    }, [peopleInvitedToMeeting, employeeData]);

    const repetitions = useMemo(() => {
        return 1;
    }, [frequency]);

    const totalCost = useMemo(() =>
            ((sumOfAnnualSalariesOfMeetingParticipants / WORKING_HOURS_PER_YEAR) * meetingDurationHours * repetitions)
            .toFixed(2),
        [sumOfAnnualSalariesOfMeetingParticipants, meetingDurationHours, repetitions]
    );

    const meetingCost = useMemo(
        () => convertFromChfTo(currency, totalCost).toFixed(2),
        [totalCost, currency]
    );

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
                    sx={{mb: 2}}
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
                    onChange={(event, value) => updatePeopleInMeeting(value)}
                    sx={{mt: 3}}
                />

                <Box sx={{ minWidth: 120, mt: 4}}>
                    <FormControl fullWidth>
                        <InputLabel id="freq">Meeting Frequency</InputLabel>
                        <Select
                            labelId="freq"
                            id="freq"
                            value={frequency}
                            label="Meeting Frequency"
                            onChange={event => setFrequency(event.target.value)}
                        >
                            <MenuItem value={'Does Not Repeat'}>Does Not Repeat</MenuItem>
                            <MenuItem value={'Repeats daily (selected day + weekdays)'}>Repeats daily (selected day + weekdays)</MenuItem>
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Typography variant='h6' mt={4} mb={1}>Meeting Cost</Typography>

                <CurrencySelectorButtonGroup value={currency} onChange={setCurrency} />

                <Typography paragraph mt={2}>
                    {meetingCost}
                </Typography>
            </DialogContent>

            <DialogActions sx={{mb: 2}}>
                <Button onClick={null} variant='contained' disabled={false}>
                    Create Meeting
                </Button>
            </DialogActions>
        </Dialog>
    </>;
};

export default CreateNewMeetingDialog;
