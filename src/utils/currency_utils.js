export const CURRENCY_TO_CHF_RATE = {
    CHF: 1,
    USD: 0.97,
    EUR: 1.03,
};

export const convertToChf = (currency, amount) => {
    if (CURRENCY_TO_CHF_RATE[currency.toUpperCase()]) {
        return amount * CURRENCY_TO_CHF_RATE[currency.toUpperCase()];
    }
};
