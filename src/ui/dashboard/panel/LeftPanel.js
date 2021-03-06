import React from 'react';

import DrawerHeader from '../DrawerHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardEntry from '../DashboardEntry';
import Drawer from './Drawer';

const LeftPanel = ({ dashboardEntries, drawerOpen, drawerWidth, onChangeEntry = () => {} }) => {


    return <>
        <Drawer variant="permanent" open={drawerOpen} drawerwidth={drawerWidth}>
            <DrawerHeader />
            <List>
                {dashboardEntries.map((entry, index) => (
                    <ListItem key={`${index}-${entry.text}`} disablePadding sx={{ display: 'block' }}>
                        <DashboardEntry
                            text={entry.text}
                            icon={entry.icon}
                            isSelected={entry.isSelected}
                            drawerOpen={drawerOpen}
                            linkTo={entry.linkTo}
                            onClick={() => onChangeEntry(index)}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </>;
};

export default LeftPanel;
