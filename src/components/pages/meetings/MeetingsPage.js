import React from 'react';
import { Button, Typography } from '@mui/material';
import CreateNewMeetingDialog from './new-meeting-dialog';
import useMeetings from "../../../hooks/useMeetings.hook";

const MeetingsPage = () => {
    const { meetingDialog } = useMeetings();

    return <>
        <Typography variant='h4' pb={3}>
            Meetings
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={meetingDialog.open}>
            Create New Meeting
        </Button>

        <CreateNewMeetingDialog isOpen={meetingDialog.isOpen} onClose={meetingDialog.close}/>
    </>;
};

export default MeetingsPage;
