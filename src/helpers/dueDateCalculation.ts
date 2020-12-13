import daysToMilliseconds from '../utils/daysToMilliseconds';

const dueDateCalculation = (dueDateFactor: number): string => {
  const BaseDate: Date = new Date('10-07-1997');
  const DueDateDate: Date = new Date(
    BaseDate.getTime() + daysToMilliseconds(dueDateFactor),
  );
  return `${DueDateDate.getDate() + 1}/${
    DueDateDate.getMonth() + 1
  }/${DueDateDate.getFullYear()}`;
};

export default dueDateCalculation;
