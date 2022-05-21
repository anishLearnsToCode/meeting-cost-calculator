import React from 'react';
import {Button, Typography} from "@mui/material";
import CreateNewMeetingDialog from "./CreateNewMeetingDialog";
import MaterialUIPickers from "./Sample";

const EmployeesPage = () => {
    return <>
        <Typography variant='h4' pb={3}>
            Meetings
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={null}>
            Create New Meeting
        </Button>

        <CreateNewMeetingDialog isOpen={true} />
    </>;
};

export default EmployeesPage;
