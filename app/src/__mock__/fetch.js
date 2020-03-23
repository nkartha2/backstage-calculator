const submittedNumbers = {};

class CalculationOfDifference {
  constructor(inputNumber) {
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


export default function(inputNumber) {
  if(!submittedNumbers.hasOwnProperty(inputNumber)) {
    new CalculationOfDifference(inputNumber);
  }
  submittedNumbers[inputNumber].pastTime = submittedNumbers[inputNumber].dateTime;
  submittedNumbers[inputNumber].dateTime = new Date().toLocaleString()

  return Promise.resolve({
    json: () => Promise.resolve({
      datetime: submittedNumbers[inputNumber].dateTime,
      value: submittedNumbers[inputNumber].difference,
      number: inputNumber,
      occurrences: submittedNumbers[inputNumber].occurrences += 1,
      last_datetime: submittedNumbers[inputNumber].pastTime
    })
  });
}