export default function(inputNumber) {
  return Promise.resolve({
    json: () => Promise.resolve({
      datetime: '',
      value: '',
      number: inputNumber,
      occurrences: '',
      last_datetime: ''
    })
  });
}