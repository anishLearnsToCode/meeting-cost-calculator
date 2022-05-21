import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "./AppBar";

const DashboardBar = ({ drawerOpen, toggleDrawerState, title }) => {
    return <AppBar position="fixed" open={drawerOpen}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawerState}
                edge="start"
                sx={{
                    marginRight: 5,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
};

export default DashboardBar;
