import { useDispatch, useSelector } from "react-redux";
import MEETING_ACTIONS from "../store/meetings/meeting.actions";

const useMeetings = () => {
    const dispatch = useDispatch();

    const meetings = useSelector(state => state.meetings.meetings);

    const deleteMeeting = meetingId => dispatch({
        type: MEETING_ACTIONS.DELETE_MEETING,
        payload: { meetingId, },
    });

    return {
        meetings,
        deleteMeeting,
    };
};

export default useMeetings;
