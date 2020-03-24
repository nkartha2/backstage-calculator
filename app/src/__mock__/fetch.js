import calculateDifference from '../calculate_difference';

const submittedNumbers = {};

export default function(inputNumber) {
  if(!submittedNumbers.hasOwnProperty(inputNumber)) {
    submittedNumbers[inputNumber] = {
      occurrences: 0,
      difference: calculateDifference(inputNumber),
      dateTime: new Date().toLocaleString(),
      pastTime: ''
    }
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