import tenCloser from '../utils/tenCloser';
import doubleAlgorithm from './doubleAlgorithm';
import sumArray from '../utils/sumArray';

// eslint-disable-next-line @typescript-eslint/ban-types
const verifyFields = (fieldArray: Array<Array<string>>): Boolean => {
  let codes: Array<string> = [];
  let sizes: Array<number> = []; // eslint-disable-line prefer-const
  let verifyingDigitsWaited: Array<string> = []; // eslint-disable-line prefer-const
  let billetIsValid: boolean = true; // eslint-disable-line prefer-const

  fieldArray.forEach(field => {
    sizes.push(field.length);

    const verifyingDigit = field[field.length - 1];
    const numbers: Array<string> = field.splice(0, field.length - 1);

    codes = [...codes, ...numbers];
    verifyingDigitsWaited.push(verifyingDigit);
  });

  /*
  numbers take all the numbers of fields 1, 2 and 3, but without the verifying digits
  */

  let numbers: Array<number> = codes.map((number: string) => parseInt(number)); // eslint-disable-line prefer-const
  numbers = doubleAlgorithm(numbers);

  // verification of verifying digits of fields 1, 2, and 3;
  const field1 = numbers.splice(0, sizes[0] - 1);
  const field2 = numbers.splice(0, sizes[1] - 1);
  const field3 = numbers;

  const sumField1 = sumArray(field1);
  const sumField2 = sumArray(field2);
  const sumField3 = sumArray(field3);

  const moduleField1 = sumField1 % 10;
  const moduleField2 = sumField2 % 10;
  const moduleField3 = sumField3 % 10;

  const verifyingDigitCalculated1 = (tenCloser(sumField1) - moduleField1).toString()[1]; // eslint-disable-line prettier/prettier
  const verifyingDigitCalculated2 = (tenCloser(sumField2) - moduleField2).toString()[1]; // eslint-disable-line prettier/prettier
  const verifyingDigitCalculated3 = (tenCloser(sumField3) - moduleField3).toString()[1]; // eslint-disable-line prettier/prettier

  const calculatedVerifyingDigits = [
    verifyingDigitCalculated1,
    verifyingDigitCalculated2,
    verifyingDigitCalculated3,
  ];

  /*
  if any of the calculated verifying digits do not be equal to waited verifying digits,
  the billet becomes automaticaly invalid
  */

  calculatedVerifyingDigits.forEach(verifyingDigit => {
    if (!verifyingDigitsWaited.includes(verifyingDigit)) {
      billetIsValid = false;
    }
  });

  return billetIsValid;
};

export default verifyFields;
