import React from 'react';

import DrawerHeader from '../DrawerHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardEntry from '../DashboardEntry';
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {closedMixin, openedMixin} from "../mixins";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }) => ({
        width: drawerwidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme, drawerwidth),
            '& .MuiDrawer-paper': openedMixin(theme, drawerwidth),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const LeftPanel = ({ dashboardEntries, drawerOpen, drawerWidth }) => {
    return <>
        <Drawer variant="permanent" open={drawerOpen} drawerwidth={drawerWidth}>
            <DrawerHeader />
            <List>
                {dashboardEntries.map((entry, index) => (
                    <ListItem key={`${index}-${entry.text}`} disablePadding sx={{ display: 'block' }}>
                        <DashboardEntry text={entry.text} icon={entry.icon} drawerOpen={drawerOpen} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </>;
};

export default LeftPanel;
