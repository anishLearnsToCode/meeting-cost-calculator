import { useEffect, useMemo, useState } from 'react';

import useTextInput from './useTextInput.hook';
import useEmployees from './useEmployees.hook';
import { MILLISECONDS_IN_HOUR, WORKING_HOURS_PER_YEAR, workingDaysInYearFrom } from '../utils/time.utils';
import { convertFromChfTo, convertToChf } from '../utils/currency.utils';
import {
    MEETING_FREQUENCY_OPTIONS
} from '../components/pages/meetings/new-meeting-dialog/meetingFrequencyOptions.config';

const useNewMeeting = () => {
    const {
        value: title,
        updateValue: setTitle,
    } = useTextInput();

    const {
        value: agenda,
        updateValue: setAgenda,
    } = useTextInput();

    const { employeesTableRepresentation: employees, employees: employeeData } = useEmployees();

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [peopleInvitedToMeeting, setPeopleInvitedToMeeting] = useState(new Set());
    const [frequency, setFrequency] = useState(MEETING_FREQUENCY_OPTIONS.NO_REPEAT);
    const [currency, setCurrency] = useState('chf');

    const getEmployeeLabel = employee => {
        return `${employee.firstName} ${employee.lastName} (#${employee.id})`;
    };

    const updatePeopleInMeeting = people => {
        const set = new Set();
        for (let person of people) {
            set.add(person.id);
        }
        setPeopleInvitedToMeeting(set);
    };

    useEffect(() => {
        startTime.setSeconds(0);
        endTime.setSeconds(0);
        setStartTime(startTime);
        setEndTime(endTime);
    }, [startTime, endTime]);

    const meetingDurationHours = useMemo(() => {
        return (endTime - startTime) / MILLISECONDS_IN_HOUR;
    }, [startTime, endTime]);

    const sumOfAnnualSalariesOfMeetingParticipants = useMemo(() => {
        let result = 0;
        for (let employeeId of peopleInvitedToMeeting) {
            const employee = employeeData.get(employeeId);
            result += convertToChf(employee.currency, employee.annualSalary);
        }
        return result;
    }, [peopleInvitedToMeeting, employeeData]);

    const repetitions = useMemo(() => {
        switch (frequency) {
            case MEETING_FREQUENCY_OPTIONS.NO_REPEAT: return 1;
            case MEETING_FREQUENCY_OPTIONS.EVERY_WEEKDAY: return workingDaysInYearFrom(date);
            default: return 1;
        }
    }, [frequency, date]);

    const totalCost = useMemo(() =>
            ((sumOfAnnualSalariesOfMeetingParticipants / WORKING_HOURS_PER_YEAR) * meetingDurationHours * repetitions)
                .toFixed(2),
        [sumOfAnnualSalariesOfMeetingParticipants, meetingDurationHours, repetitions]
    );

    const meetingCost = useMemo(
        () => Math.max(convertFromChfTo(currency, totalCost).toFixed(2), 0),
        [totalCost, currency]
    );

    return {
        title,
        setTitle,
        agenda,
        setAgenda,
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        employees,
        getEmployeeLabel,
        updatePeopleInMeeting,
        frequency,
        setFrequency,
        currency,
        setCurrency,
        meetingCost,
    };
};

export default useNewMeeting;
