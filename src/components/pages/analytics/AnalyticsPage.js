import React from 'react';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import TotalMeetingsCostWidget from './total-meetings-cost-widget';
import WedoSavingsWidget from "./wedo-savings-widget";

const Row = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const AnalyticsPage = () => {
    return <>
        <Typography variant='h4' pb={3} pt={2}>
            Analytics
        </Typography>

        <Row>
            <TotalMeetingsCostWidget />
            <WedoSavingsWidget />
        </Row>
    </>;
};

export default AnalyticsPage;
