import React, { useState } from 'react';

import useAnalytics from '../../../../hooks/useAnalytics.hook';
import useAmountInCurrency from '../../../../hooks/useAmountInCurrency.hook';
import { WidgetWrapper } from '../../../../ui/widget';
import { Typography } from '@mui/material';
import CurrencySelectorButtonGroup from '../../../../ui/currency-selector-button-group';

const WedoSavingsWidget = () => {
    const { savingsWithWedoChf } = useAnalytics();
    const [currency, setCurrency] = useState('chf');
    const savingsWithWedo = useAmountInCurrency(currency, savingsWithWedoChf);

    return <>
        <WidgetWrapper>
            <Typography variant='h6' pb={3}>
                Savings With WeDo
            </Typography>

            <CurrencySelectorButtonGroup value={currency} onChange={setCurrency} />

            <Typography variant='h4' pt={3} color='#a5ab2e'>
                {currency.toUpperCase()} {savingsWithWedo}
            </Typography>

            <Typography paragraph pt={3} color='#a5ab2e'>
                You save more than 30% on meetings by using WeDo
            </Typography>
        </WidgetWrapper>
    </>;
};

export default WedoSavingsWidget;
