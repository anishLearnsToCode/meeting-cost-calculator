import React, {useMemo, useState} from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, TextField
} from '@mui/material';
import CurrencySelector from "../../../ui/currency-selector";

const NewEmployeeDialog = ({ isOpen = false, onClose }) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const [currency, setCurrency] = useState('CHF');

    const isDisabled = useMemo(() => {
        return firstName === ''
            || firstName === undefined
            || lastName === ''
            || lastName === undefined
            || email === ''
            || email === undefined
            || salary <= 0
            || salary === undefined
    }, [
        firstName,
        lastName,
        email,
        salary
    ]);


    return <>
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Enter New Employee Details</DialogTitle>
            <DialogContent>
                <TextField
                    id='first-name'
                    label='First Name'
                    type='text'
                    fullWidth
                    required={true}
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    helperText={'First name is required'}
                    sx={{mt: 2}}
                />
                <TextField
                    id='last-name'
                    label='Last Name'
                    type='text'
                    fullWidth
                    required={true}
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    helperText={'Last name is required'}
                    sx={{mt: 2}}
                />
                <TextField
                    id='email'
                    label='Email'
                    type='email'
                    fullWidth
                    required={true}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    helperText={'Email is required'}
                    sx={{mt: 2}}
                />

                <Box
                    sx={{
                    display: 'flex',
                    '& > :not(style)': { mt: 3 },
                }}
                    >
                    <CurrencySelector value={currency} onChange={setCurrency} />
                    <TextField
                        id='salary'
                        label='Annual Salary'
                        type='number'
                        min={0}
                        fullWidth
                        required={true}
                        value={salary}
                        onChange={event => setSalary(event.target.value)}
                        helperText={'Annual Salary is required'}
                        sx={{mt: 2}}
                    />;
            </Box>
            </DialogContent>


            <DialogActions sx={{mb: 2}}>
                <Button onClick={onClose} variant='contained' disabled={isDisabled}>
                    Add Employee
                </Button>
            </DialogActions>
        </Dialog>
    </>;
};

export default NewEmployeeDialog;
