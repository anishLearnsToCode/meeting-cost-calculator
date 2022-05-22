import React, { useState } from 'react';
import useAnalytics from "../../../../hooks/useAnalytics.hook";
import {Box, Typography} from "@mui/material";
import CurrencySelectorButtonGroup from "../../../../ui/currency-selector-button-group";
import useAmountInCurrency from "../../../../hooks/useAmountInCurrency.hook";
import {WidgetWrapper} from "../../../../ui/widget";

const TotalMeetingsCostWidget = () => {
    const { totalMeetingsCostChf } = useAnalytics();
    const [currency, setCurrency] = useState('chf');
    const totalMeetingsCost = useAmountInCurrency(currency, totalMeetingsCostChf);

    return <>
        <WidgetWrapper>
            <Typography variant='h6' pb={3}>
                Total Meetings Cost
            </Typography>

            <CurrencySelectorButtonGroup value={currency} onChange={setCurrency} />

            <Typography variant='h4' pt={3} color='#913334'>
                {currency.toUpperCase()} {totalMeetingsCost}
            </Typography>
        </WidgetWrapper>
    </>;
};

export default TotalMeetingsCostWidget;
