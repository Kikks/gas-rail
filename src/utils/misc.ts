export const nFormatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((digit) => {
      return num >= digit.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
};

export const processPhoneNumber = (number: string) => {
  if (number.startsWith('+')) return number.trim().split('+')[1];

  if (number.startsWith('0')) {
    const splitNumbers = number.split('');
    splitNumbers.splice(0, 1);
    return `234${splitNumbers.join('')}`;
  }

  return number;
};

export const padNumber = (number: number) =>
  String(number).length === 1 ? `0${number}` : String(number);

export const convertQueryToString = (query: {
  [key: string]: string | number | boolean;
}) => {
  return `${Object.entries(query)
    .map((entry) => `${entry[0]}=${entry[1]}`)
    .join('&')}`;
};

export const convertM3ToKg = (value: number = 0) => {
  return (1.887 * value).toFixed(1);
};

export const convertM3ToLitre = (value: number = 0) => {
  return (value * 0.27).toFixed(1);
};

export const convertLitreToKg = (value: number = 0) => {
  return (value * 0.51).toFixed(1);
};

export const convertKgToLitre = (value: number = 0) => {
  return (value / 0.51).toFixed(1);
};
