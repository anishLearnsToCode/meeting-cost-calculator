import React from 'react';
import Dashboard from '../ui/dashboard';
import {
    CalendarMonthOutlined as MeetingsIcon,
    PersonOutlineOutlined as EmployeesIcon,
    SsidChartOutlined as AnalyticsIcon
} from "@mui/icons-material";
import Content from "./Content";

const ApplicationDashboard = () => {
    return <Dashboard
        dashboardEntries={[
            { text: 'Employees', icon: EmployeesIcon },
            { text: 'Meetings', icon: MeetingsIcon },
            { text: 'Analytics', icon: AnalyticsIcon }
        ]}
    >
     <Content />
    </Dashboard>;
};

export default ApplicationDashboard;
