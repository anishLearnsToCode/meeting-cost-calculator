import React, {useEffect, useMemo, useState} from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Stack, Autocomplete, InputLabel, Select, MenuItem, FormControl,
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import useTextInput from '../../../hooks/useTextInput.hook';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import useEmployees from "../../../hooks/useEmployees.hook";

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
];

const CreateNewMeetingDialog = ({ isOpen, onClose }) => {
    const {
        value: title,
        updateValue: setTitle,
    } = useTextInput();

    const {
        value: agenda,
        updateValue: setAgenda,
    } = useTextInput();

    const { employeesTableRepresentation: employees } = useEmployees();

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [peopleInvitedToMeeting, setPeopleInvitedToMeeting] = useState(new Set());
    const [frequency, setFrequency] = useState('Does Not Repeat');
    const endTimeLessThanStartTime = useMemo(() => endTime < startTime, [startTime, endTime]);

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
