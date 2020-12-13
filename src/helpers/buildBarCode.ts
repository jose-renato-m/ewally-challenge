const buildBarCode = (typeableRow: Array<string>): string => {
  let bc: string = ''; // eslint-disable-line prefer-const

  bc += typeableRow.slice(0, 3);
  bc += typeableRow.slice(3, 4);
  bc += typeableRow.slice(32, 33);
  bc += typeableRow.slice(33, 37);
  bc += typeableRow.slice(37, 47);
  bc += typeableRow.slice(4, 9);
  bc += typeableRow.slice(10, 20);
  bc += typeableRow.slice(21, 31);

  return bc.split(',').join('');
};

export default buildBarCode;
