import { useDispatch, useSelector } from "react-redux";
import MEETING_ACTIONS from "../store/meetings/meeting.actions";

const useMeetings = () => {
    const dispatch = useDispatch();
    const newMeetingDialogIsOpen = useSelector(state => state.meetings.meetingDialogIsOpen);
    const meetings = useSelector(state => state.meetings.meetings);

    const openNewMeetingsDialog = () => dispatch({
        type: MEETING_ACTIONS.OPEN_NEW_MEETING_DIALOG,
    });

    const closeNewMeetingsDialog = () => dispatch({
        type: MEETING_ACTIONS.CLOSE_NEW_MEETING_DIALOG,
    });

    const deleteMeeting = meetingId => dispatch({
        type: MEETING_ACTIONS.DELETE_MEETING,
        payload: { meetingId, },
    });

    return {
        meetingDialog: {
            isOpen: newMeetingDialogIsOpen,
            open: openNewMeetingsDialog,
            close: closeNewMeetingsDialog,
        },
        meetings,
        deleteMeeting,
    };
};

export default useMeetings;
