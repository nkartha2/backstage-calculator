import DifferenceCalculator from '../DifferenceCalculator';

describe('Test Difference of Sum of Squares and Square of Sum', () => {
  test('it should return a difference of 2640 for 10', () => {
    const submittedNumbers = {};
    const calcForTen = new DifferenceCalculator(10, submittedNumbers);
    expect(calcForTen.calculateDifference()).toEqual(2640)
  });

  test('it should return a difference of 170 for 5', () => {
    const submittedNumbers = {};
    const calcForTen = new DifferenceCalculator(5, submittedNumbers);
    expect(calcForTen.calculateDifference()).toEqual(170)
  })
});

