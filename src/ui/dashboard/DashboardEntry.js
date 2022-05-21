import React from 'react';
import ListItemIcon from "@mui/material/ListItemIcon";
import {SvgIcon} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";

const DashboardEntry = ({ drawerOpen, icon, text, isSelected = false, linkTo, onClick = () => {}}) => {
    return <>
        <Link to={linkTo}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: drawerOpen ? 'initial' : 'center',
                    px: 2.5,
                    backgroundColor: isSelected ? '#f2f3fc' : 'white',
                }}
                onClick={onClick}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: drawerOpen ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <SvgIcon component={icon} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: drawerOpen ? 1 : 0, color: 'black', textDecoration: ''}} />
            </ListItemButton>
        </Link>
    </>;
};

export default DashboardEntry;
