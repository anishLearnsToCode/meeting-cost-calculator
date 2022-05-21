import React from 'react';
import Box from "@mui/material/Box";

const RightPanel = ({ children }) => {
    return <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
        </Box>
    </>;
};

export default RightPanel;
