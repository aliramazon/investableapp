const d3 = require('d3-format');
const format = d3.format('$,');
export const roundNumber = (number: number) => {
    return number.toFixed(2);
};

export const formatFunds = (value: number) => {
    return format(value);
};

export const formatPercentage = (value: number) => {
    return `${roundNumber(value)}%`;
};
