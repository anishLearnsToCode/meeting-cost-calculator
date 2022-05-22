import { useDispatch, useSelector } from "react-redux";
import {useEffect, useMemo} from 'react';
import { convertToChf } from '../utils/currency.utils';
import EMPLOYEES_ACTIONS from "../store/employees/employees.actions";

const useEmployees = () => {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees.data);
    const selectedRowIds = useSelector(state => state.employees.selectedRowIds);
    const newEmployeeDialogIsOpen = useSelector(state => state.employees.newEmployeeDialogIsOpen);

    const employeesTableRepresentation = useMemo(() => {
        const result = [];
        for (const [, employee] of employees) {
            result.push({
                ...employee,
                normalizedSalary: convertToChf(employee.currency, employee.annualSalary)
            });
        }
        return result;
    }, [employees]);

    const toggleSelectedRow = employeeId => {
        dispatch({
            type: EMPLOYEES_ACTIONS.TOGGLE_ROW,
            payload: { employeeId },
        });
    };

    const rowsAreSelected = useMemo(() => selectedRowIds.size > 0, [selectedRowIds]);

    const deleteSelectedEmployees = () => dispatch({
        type: EMPLOYEES_ACTIONS.REMOVE_EMPLOYEES,
    });

    const openNewEmployeeDialog = () => dispatch({
        type: EMPLOYEES_ACTIONS.OPEN_NEW_EMPLOYEE_DIALOG,
    });

    const closeNewEmployeeDialog = () => dispatch({
        type: EMPLOYEES_ACTIONS.CLOSE_NEW_EMPLOYEE_DIALOG,
    });

    const createNewEmployee = employee => dispatch({
        type: EMPLOYEES_ACTIONS.CREATE_NEW_EMPLOYEE,
        payload: employee,
    });

    return {
        employees,
        employeesTableRepresentation,
        rowsAreSelected,
        newEmployeeDialog: {
            isOpen: newEmployeeDialogIsOpen,
            open: openNewEmployeeDialog,
            close: closeNewEmployeeDialog,
        },
        toggleSelectedRow,
        deleteSelectedEmployees,
        createNewEmployee,
    };
};

export default useEmployees;
