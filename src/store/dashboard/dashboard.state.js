import {
    CalendarMonthOutlined as MeetingsIcon,
    PersonOutlineOutlined as EmployeesIcon,
    SsidChartOutlined as AnalyticsIcon
} from "@mui/icons-material";

const DASHBOARD_INITIAL_STATE = {
    isOpen: true,
    unselectedEntries: [
        { text: 'Employees', icon: EmployeesIcon, linkTo: 'employees', isSelected: false },
        { text: 'Meetings', icon: MeetingsIcon, linkTo: 'meetings', isSelected: false },
        { text: 'Analytics', icon: AnalyticsIcon, linkTo: 'analytics', isSelected: false }
    ],
    entries: [
        { text: 'Employees', icon: EmployeesIcon, linkTo: 'employees', isSelected: false },
        { text: 'Meetings', icon: MeetingsIcon, linkTo: 'meetings', isSelected: false },
        { text: 'Analytics', icon: AnalyticsIcon, linkTo: 'analytics', isSelected: false }
    ],
};

export default DASHBOARD_INITIAL_STATE;
