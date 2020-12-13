const isNumeric = (string: string): boolean => {
  const numbers: Array<string> = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let isNumeric = true;

  string.split('').forEach((number: string) => {
    if (!numbers.includes(number)) {
      isNumeric = false;
    }
  });

  return isNumeric;
};

export default isNumeric;
