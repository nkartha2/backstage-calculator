function calculateSquareofSums(inputNumber) {
  let sumToSquare = 0;
  for(let i=1; i < inputNumber + 1; i++) {
    sumToSquare += i;
  }
  return sumToSquare * sumToSquare;
}

function calculateSumOfSquares (inputNumber) {
  let sumOfSquares = 0;
  for(let i=1; i < inputNumber + 1; i++) {
    const square = i * i;
    sumOfSquares += square;
  }
  return sumOfSquares;
}

export default function calculateDifference(inputNumber) {
  return calculateSquareofSums(inputNumber) - calculateSumOfSquares(inputNumber);
}