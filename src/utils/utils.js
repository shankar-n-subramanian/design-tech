

export const formatNumber = (numberValue, decimalPlaces) => {
    return Number(numberValue.toFixed(decimalPlaces || 2)).toLocaleString();
};