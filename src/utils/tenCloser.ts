const tenCloser = (number: number): number => {
  return ((parseInt(number.toFixed(1).toString().split('')[0]) + 1) * 10); // eslint-disable-line prettier/prettier
};

export default tenCloser;
