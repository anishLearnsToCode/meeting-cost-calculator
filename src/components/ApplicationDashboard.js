import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../ui/dashboard';
import {
    CalendarMonthOutlined as MeetingsIcon,
    PersonOutlineOutlined as EmployeesIcon,
    SsidChartOutlined as AnalyticsIcon
} from "@mui/icons-material";
import EmployeesPage from './pages/EmployeesPage';
import MeetingsPage from './pages/MeetingsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import useDashboard from '../hooks/useDashboard.hook';

const ApplicationDashboard = () => {
    const {
        isOpen,
        entries,
        toggleDashboardOpen,
        changeSelectedEntry
    } = useDashboard();

    return <Dashboard
        dashboardEntries={entries}
        drawerOpen={isOpen}
        onToggleDrawer={toggleDashboardOpen}
        onChangeEntry={changeSelectedEntry}
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
