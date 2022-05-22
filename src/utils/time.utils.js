import { isWeekend, getYear, differenceInCalendarWeeks, differenceInCalendarMonths } from "date-fns";

export const WORKING_HOURS_PER_WEEK = 42;

export const WEEKS_IN_MONTH = 4;

export const MONTHS_IN_YEAR = 12;

export const WORKING_HOURS_PER_MONTH = WORKING_HOURS_PER_WEEK * WEEKS_IN_MONTH;

export const WORKING_HOURS_PER_YEAR = WORKING_HOURS_PER_MONTH * MONTHS_IN_YEAR;

export const MILLISECONDS_IN_SECOND = 1_000;

export const SECONDS_IN_MINUTE = 60;

export const MINUTES_IN_HOUR = 60;

export const MILLISECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;

export const firstDayOfNextYear = year => {
    return new Date(year + 1, 0, 1);
};

export const isWeekday = date => !isWeekend(date);

export const workingDaysInYearFrom = date => {
    const nextYear = firstDayOfNextYear(getYear(date));
    let weekdays = 0;

    for (let loop = new Date(date) ; loop < nextYear ; loop = new Date(loop.setDate(loop.getDate() + 1))) {
        if (isWeekday(loop)) {
            weekdays++;
        }
    }

    // include the start date as well if it was on a weekend
    return weekdays + (isWeekend(date) ? 1 : 0);
};

export const numberOfWeeksInYearFrom = date => {
    return differenceInCalendarWeeks(firstDayOfNextYear(getYear(date)), date);
};

export const numberOfMonthsInYearFrom = date => {
    const r = differenceInCalendarMonths(firstDayOfNextYear(getYear(date)), date);
    console.log('diff', r);
    return r;
};
