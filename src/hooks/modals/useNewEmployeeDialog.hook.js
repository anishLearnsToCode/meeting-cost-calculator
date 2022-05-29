import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EMPLOYEES_ACTIONS from '../../store/employees/employees.actions';


const useNewEmployeeDialog = () => {
    const dispatch = useDispatch();
    const newEmployeeDialogIsOpen = useSelector(state => state.employees.newEmployeeDialogIsOpen);

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [salary, setSalary] = useState();
    const [currency, setCurrency] = useState('CHF');

    const openNewEmployeeDialog = () => dispatch({
        type: EMPLOYEES_ACTIONS.OPEN_NEW_EMPLOYEE_DIALOG,
    });

    const closeNewEmployeeDialog = () => dispatch({
        type: EMPLOYEES_ACTIONS.CLOSE_NEW_EMPLOYEE_DIALOG,
    });

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

    const clearAllFields = () => {
        setFirstName(undefined);
        setLastName(undefined);
        setSalary(undefined);
        setEmail(undefined);
    }

    return {
        NewEmployeeDialog: {
            isOpen: newEmployeeDialogIsOpen,
            open: openNewEmployeeDialog,
            close: closeNewEmployeeDialog,
        },
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        salary,
        setSalary,
        currency,
        setCurrency,
        isDisabled,
        clearAllFields,
    };
};

export default useNewEmployeeDialog;
