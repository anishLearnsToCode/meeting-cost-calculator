import useMeetings from "./useMeetings.hook";
import {useMemo} from "react";

const useAnalytics = () => {
    const { meetings } = useMeetings();

    const totalMeetingsCostChf = useMemo(() => {
        let result = 0;
        for (const [, meeting] of meetings) {
            result += meeting.meetingCostChf;
        }
        console.log('tot', result);
        return result;
    }, [meetings]);

    const savingsWithWedoChf = useMemo(() => 0.3 * totalMeetingsCostChf, [totalMeetingsCostChf]);

    return {
        totalMeetingsCostChf,
        savingsWithWedoChf,
    };
};

export default useAnalytics;
