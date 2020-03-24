import calculateDifference from '../calculate_difference';

describe('Test Difference of Sum of Squares and Square of Sum', () => {
  test('it should return a difference of 2640 for 10', () => {
    expect(calculateDifference(10)).toEqual(2640)
  });

  test('it should return a difference of 170 for 5', () => {
    expect(calculateDifference(5)).toEqual(170)
  })
});

