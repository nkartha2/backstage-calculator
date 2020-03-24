export default class DifferenceCalculator {
  constructor(inputNumber, submittedNumbers) {
    this.inputForCalc = inputNumber;
    submittedNumbers[this.inputForCalc] = {
      occurrences: 0,
      difference: this.calculateDifference(),
      dateTime: new Date().toLocaleString(),
      pastTime: ''
    }
  }

  calculateSquareofSums = () => {
    let sumToSquare = 0;
    for(let i=1; i < this.inputForCalc + 1; i++) {
      sumToSquare += i;
    }
    return sumToSquare * sumToSquare;
  }

  calculateSumOfSquares = () => {
    let sumOfSquares = 0;
    for(let i=1; i < this.inputForCalc + 1; i++) {
      const square = i * i;
      sumOfSquares += square;
    }
    return sumOfSquares;
  }

  calculateDifference = () => {
    return this.calculateSquareofSums() - this.calculateSumOfSquares();
  }
}