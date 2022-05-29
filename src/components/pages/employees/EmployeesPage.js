import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import Table from '../../../ui/table';
import EMPLOYEES_TABLE_COLUMN_CONFIG from './table-column.config';
import useEmployees from '../../../hooks/state/useEmployees.hook';
import useNewEmployeeDialog from "../../../hooks/modals/useNewEmployeeDialog.hook";


const EmployeesPage = () => {
    const {
        employeesTableRepresentation,
        toggleSelectedRow,
        rowsAreSelected,
        deleteSelectedEmployees,
    } = useEmployees();

    const { NewEmployeeDialog } = useNewEmployeeDialog();

    return <>
        <Typography variant='h4' pb={3}>
            Employees
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={NewEmployeeDialog.open}>
            Add Employee
        </Button>
        <Button variant='contained' disabled={!rowsAreSelected} color='error' onClick={deleteSelectedEmployees}>
            Delete Employee(s)
        </Button>

        <Box pt={4}>
            <Table
                rows={employeesTableRepresentation}
                columns={EMPLOYEES_TABLE_COLUMN_CONFIG}
                onCellClick={event => toggleSelectedRow(event.row.id)}
            />
        </Box>
    </>;
};

export default EmployeesPage;
