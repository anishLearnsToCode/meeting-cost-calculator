import React, { useState } from 'react';

import Box from '@mui/material/Box';
import DashboardBar from './DashboardBar';
import { LeftPanel, RightPanel } from './panel';


const Dashboard = ({
   dashboardEntries,
   children,
   drawerWidth = 240,
   drawerOpen,
   onToggleDrawer,
   onChangeEntry,
  }) => {
    return (
        <>
            <DashboardBar
                drawerOpen={drawerOpen}
                toggleDrawerState={onToggleDrawer}
                title={'Meeting Cost Calculator Application'}
            />

            <Box sx={{ display: 'flex' }}>
                <LeftPanel
                    drawerOpen={drawerOpen}
                    dashboardEntries={dashboardEntries}
                    drawerWidth={drawerWidth}
                    onChangeEntry={onChangeEntry}
                />

                <RightPanel>{children}</RightPanel>
            </Box>
        </>
    );
};

export default Dashboard;
