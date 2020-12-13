import sumArray from '../utils/sumArray';

// eslint-disable-next-line @typescript-eslint/ban-types
const validateVerificationCode = (barCode: Array<string>): Boolean => {
  const codesP1: Array<string> = barCode.splice(0, 4);
  const codesP2: Array<string> = barCode.splice(1, barCode.length - 1);

  const codes: Array<number> = [...codesP1, ...codesP2].map(number =>
    parseInt(number),
  );

  let acumulator: Array<number> = []; // eslint-disable-line prefer-const
  let weight: number = 2;

  codes.reverse().forEach(value => {
    const auxiliary: number = value * weight;
    acumulator.push(auxiliary);
    weight = weight === 9 ? 2 : weight + 1;
  });

  const codeSum: number = sumArray(acumulator);
  const rest: number = codeSum % 11;
  let calculatedVerificationCode: number = 11 - rest;

  if (
    calculatedVerificationCode === 0 ||
    calculatedVerificationCode === 10 ||
    calculatedVerificationCode === 11
  ) {
    calculatedVerificationCode = 1;
  }

  return barCode[0] === calculatedVerificationCode.toString();
};

export default validateVerificationCode;
