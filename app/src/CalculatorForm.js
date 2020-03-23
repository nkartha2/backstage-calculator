import React from 'react';
import fetch from './__mock__/fetch';


class CalculatorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      numberToSubmit: 0,
      errorMessage: ''
    }
  }

  checkValidNumber (inputNumber) {
    // the number should be natural, above 0, and less than or equal to 100
    if(inputNumber < 0 || inputNumber > 100 || !Number.isInteger(inputNumber)) {
      this.setState({errorMessage: 'Not a valid number for calculating difference.'});
      return false
    }
    return true
  }

  onNumberChange = (inputNumber) => {
    this.setState({errorMessage: ''});
    const convertedInputNumber = parseInt(inputNumber);
    this.setState({numberToSubmit: convertedInputNumber});
  }

  onSubmitNumber = (e) => {
    e.preventDefault();

    if(this.checkValidNumber(this.state.numberToSubmit)) {
      try {
        fetch(this.state.numberToSubmit).then(
          response => response.json()
        ).then(
          json => {
            this.setState({
              submittedValue: json.number,
              calculatedDifference: json.value,
              occurences: json.occurrences,
              dateTime: json.datetime,
              pastDateTime: json.last_datetime
            })
          }
        )
      } catch(e) {
        console.error(e);
        this.setState({errorMessage: e.errorMessage});
      } finally {
        if(!this.state.errorMessage.length) {
          this.setState({numberToSubmit: 0});
        }
      }
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.onSubmitNumber(e)}}>
          <label>
            Enter Number
            <input
              value={this.state.numberToSubmit ? this.state.numberToSubmit : ""}
              onChange={(e) => {this.onNumberChange(e.currentTarget.value)}}
              type="number"
            />
          </label>
          <input value="Submit" type="submit"/>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        </form>
        <ul>
          <li>Submitted Value: {this.state.submittedValue}</li>
          <li>Calculated Difference: {this.state.calculatedDifference}</li>
          <li>Number of Times Requested: {this.state.occurences}</li>
          <li>Date of Time Requested:{this.state.dateTime}</li>
          {this.state.pastDateTime && <li>Last Requested: {this.state.pastDateTime}</li>}
        </ul>
      </div>
    );
  }
}

export default CalculatorForm;