import {useMemo} from "react";
import {convertFromChfTo} from "../utils/currency.utils";

const useAmountInCurrency = (currency, amountChf) => {
    return useMemo(
        () => convertFromChfTo(currency, amountChf).toFixed(2),
        [currency, amountChf]
    );
};

export default useAmountInCurrency;
