import { addHours } from 'date-fns';
import {
    MEETING_FREQUENCY_OPTIONS
} from '../../components/pages/meetings/new-meeting-dialog/meetingFrequencyOptions.config';

const meetings = new Map();
meetings.set(0, {
    title: 'Interview',
    agenda: 'js + react',
    date: new Date(2022, 6, 22),
    startTime: new Date(),
    endTime: addHours(new Date(), 1),
    participants: new Set([0, 2]),
    frequency: MEETING_FREQUENCY_OPTIONS.EVERY_WEEKDAY,
    meetingCostChf: 20_000,
});

meetings.set(1, {
    title: 'Group Coffee',
    agenda: 'ping pong table',
    date: new Date(2023, 6, 22),
    startTime: new Date(),
    endTime: addHours(new Date(), 2),
    participants: new Set([0, 2, 1]),
    frequency: MEETING_FREQUENCY_OPTIONS.WEEKLY,
    meetingCostChf: 40_000,
});

meetings.set(2, {
    title: 'Debugging',
    agenda: 'kmn!!!',
    date: new Date(2023, 6, 22),
    startTime: new Date(),
    endTime: addHours(new Date(), 6),
    participants: new Set([1]),
    frequency: MEETING_FREQUENCY_OPTIONS.NO_REPEAT,
    meetingCostChf: 354,
});

const INITIAL_MEETINGS_PAGE_STATE = {
    meetings,
    meetingDialogIsOpen: false,
    nextMeetingId: 3,
};

export default INITIAL_MEETINGS_PAGE_STATE;
