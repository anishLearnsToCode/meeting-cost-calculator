import React, { useState } from 'react';

import Box from '@mui/material/Box';
import DashboardBar from './DashboardBar';
import { LeftPanel, RightPanel } from './panel';


const Dashboard = ({ dashboardEntries, children, drawerWidth = 240 }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const toggleDrawerState = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <DashboardBar
                drawerOpen={drawerOpen}
                toggleDrawerState={toggleDrawerState}
                title={'Meeting Cost Calculator Application'}
            />

            <Box sx={{ display: 'flex' }}>
                <LeftPanel
                    drawerOpen={drawerOpen}
                    dashboardEntries={dashboardEntries}
                    drawerWidth={drawerWidth}
                />

                <RightPanel>{children}</RightPanel>
            </Box>
        </>
    );
};

export default Dashboard;
