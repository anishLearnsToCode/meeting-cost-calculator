import INITIAL_MEETINGS_PAGE_STATE from './meeting.state';
import MEETING_ACTIONS from "./meeting.actions";
import {cloneMap} from "../../utils/clone.utils";

const meetingsReducer = (state = INITIAL_MEETINGS_PAGE_STATE, action) => {
    switch (action.type) {
        case MEETING_ACTIONS.OPEN_NEW_MEETING_DIALOG: {
            return {
                ...state,
                meetingDialogIsOpen: true,
            };
        }

        case MEETING_ACTIONS.CLOSE_NEW_MEETING_DIALOG: {
            return {
                ...state,
                meetingDialogIsOpen: false,
            };
        }

        case MEETING_ACTIONS.CREATE_NEW_MEETING: {
            const meetings = cloneMap(state.meetings);
            meetings.set(state.nextMeetingId, action.payload);
            return {
                ...state,
                meetings,
                nextMeetingId: state.nextMeetingId + 1,
            };
        }

        case MEETING_ACTIONS.DELETE_MEETING: {
            const meetings = cloneMap(state.meetings);
            meetings.delete(action.payload.meetingId);
            return {
                ...state,
                meetings,
            };
        }

        default: return state;
    }
};

export default meetingsReducer;
