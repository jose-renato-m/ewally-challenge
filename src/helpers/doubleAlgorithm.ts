const doubleAlgorithm = (numbers: Array<number>): Array<number> => {
  const doubleArray: Array<number> = [];

  numbers.forEach((number, i) => {
    if (i % 2 === 0) {
      const numberMultiplied: number = number * 2;

      if (numberMultiplied > 9) {
        doubleArray.push(
          numberMultiplied
            .toString()
            .split('')
            .map(i => parseInt(i))
            .reduce((number, acumulator) => number + acumulator),
        );
      } else {
        doubleArray.push(numberMultiplied);
      }
    } else {
      doubleArray.push(number);
    }
  });

  return doubleArray;
};

export default doubleAlgorithm;
