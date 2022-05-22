import React from 'react';
import { Box } from '@mui/material';

const WidgetWrapper = ({ children }) => {
    return <Box sx={{p: 2, border: '1px solid #b8b1b0', borderRadius: 2}}>
        {children}
    </Box>;
};

export default WidgetWrapper;
