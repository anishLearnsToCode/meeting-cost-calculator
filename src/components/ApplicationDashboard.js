import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from '../ui/dashboard';
import {
    CalendarMonthOutlined as MeetingsIcon,
    PersonOutlineOutlined as EmployeesIcon,
    SsidChartOutlined as AnalyticsIcon
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import EmployeesPage from "./pages/EmployeesPage";
import MeetingsPage from "./pages/MeetingsPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const ApplicationDashboard = () => {
    return <Dashboard
        dashboardEntries={[
            { text: 'Employees', icon: EmployeesIcon, linkTo: 'employees' },
            { text: 'Meetings', icon: MeetingsIcon, linkTo: 'meetings'},
            { text: 'Analytics', icon: AnalyticsIcon, linkTo: 'analytics' }
        ]}
    >
        <Routes>
            <Route path='/' />
            <Route path='/employees' element={<EmployeesPage />}/>
            <Route path='/meetings' element={<MeetingsPage />}/>
            <Route path='/analytics' element={<AnalyticsPage />}/>
        </Routes>
    </Dashboard>;
};

export default ApplicationDashboard;
