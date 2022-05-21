import { useDispatch, useSelector } from "react-redux";
import {useEffect, useMemo} from 'react';
import { convertToChf } from '../utils/currency_utils';
import EMPLOYEES_ACTIONS from "../store/employees/employees.actions";

const useEmployees = () => {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees.data);
    const selectedRowIds = useSelector(state => state.employees.selectedRowIds);

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

    return {
        employees,
        employeesTableRepresentation,
        rowsAreSelected,
        toggleSelectedRow,
        deleteSelectedEmployees,
    };
};

export default useEmployees;
