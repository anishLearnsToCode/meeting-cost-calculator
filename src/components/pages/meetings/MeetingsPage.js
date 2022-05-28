import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import CreateNewMeetingDialog from './new-meeting-dialog';
import useMeetings from '../../../hooks/useMeetings.hook';
import Meeting from './meeting/Meeting';
import useNewMeeting from '../../../hooks/useNewMeeting.hook';

const MeetingsPage = () => {
    const { meetings, deleteMeeting } = useMeetings();
    const { NewMeetingDialog } = useNewMeeting();
    const MeetingsSection = [];

    for (let [key, value] of meetings) {
        MeetingsSection.push(<Meeting key={key} meeting={value} onDeleteMeeting={() => deleteMeeting(key)}/>);
    }

    return <>
        <Typography variant='h4' pb={3}>
            Meetings
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={NewMeetingDialog.open}>
            Create New Meeting
        </Button>

        <CreateNewMeetingDialog />

        <Box pt={4}>
            {MeetingsSection}
        </Box>

    </>;
};

export default MeetingsPage;
