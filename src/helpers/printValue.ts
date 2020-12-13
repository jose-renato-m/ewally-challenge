// eslint-disable-next-line
const printValue = (currencyCode: string, value: string) => {
  if (currencyCode === '9') return 'R$:' + (parseInt(value) / 100).toString(); // eslint-disable-line prefer-template
};

export default printValue;
