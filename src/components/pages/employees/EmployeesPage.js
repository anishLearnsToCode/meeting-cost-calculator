import React from 'react';
import {Box, Button, ButtonGroup, Typography} from '@mui/material';
import Table from "../../../ui/table";
import EMPLOYEES_TABLE_COLUMN_CONFIG from "./table-column.config";
import useEmployees from "../../../hooks/useEmployees.hook";
import NewEmployeeDialog from "./NewEmployeeDialog";

const EmployeesPage = () => {
    const {
        employeesTableRepresentation,
        toggleSelectedRow,
        rowsAreSelected,
        deleteSelectedEmployees,
        newEmployeeDialog,
    } = useEmployees();

    return <>
        <Typography variant='h4' pb={3}>
            Employees Page
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={newEmployeeDialog.open}>
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

        <NewEmployeeDialog isOpen={true} onClose={newEmployeeDialog.close}/>
    </>;
};

export default EmployeesPage;
