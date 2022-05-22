import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import CreateNewMeetingDialog from './new-meeting-dialog';
import useMeetings from "../../../hooks/useMeetings.hook";
import Meeting from "./meeting/Meeting";

const MeetingsPage = () => {
    const { meetingDialog, meetings, deleteMeeting } = useMeetings();
    const MeetingsSection = [];

    for (let [key, value] of meetings) {
        MeetingsSection.push(<Meeting key={key} meeting={value} onDeleteMeeting={() => deleteMeeting(key)}/>);
    }

    return <>
        <Typography variant='h4' pb={3}>
            Meetings
        </Typography>

        <Button variant='contained' sx={{mr: 2}} onClick={meetingDialog.open}>
            Create New Meeting
        </Button>

        <CreateNewMeetingDialog isOpen={meetingDialog.isOpen} onClose={meetingDialog.close}/>

        {/*{meetings.map((meeting, index) => <Meeting meeting={meeting}/>)}*/}

        <Box pt={4}>
            {MeetingsSection}
        </Box>

    </>;
};

export default MeetingsPage;
