import React from 'react';
import fetch from './__mock__/fetch';
import './calculator.scss';


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
    if(inputNumber  < 0 || inputNumber > 100 || !Number.isInteger(inputNumber)) {
      this.setState({errorMessage: 'Please enter a number above 0 and less than 101.'});
      return false;
    }
    return true;
  }

  onNumberChange = (inputNumber) => {
    const convertedInputNumber = parseInt(inputNumber);
    this.setState({numberToSubmit: convertedInputNumber});
    this.setState({errorMessage: ''});
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
      <div className="calculator">
        <form onSubmit={(e) => {this.onSubmitNumber(e)}}>
          <label>
            Enter A Number Between 0 and 101
            <input
              value={this.state.numberToSubmit ? this.state.numberToSubmit : ""}
              onChange={(e) => {this.onNumberChange(e.currentTarget.value)}}
              type="number"
            />
          </label>
          <input value="Submit" type="submit"/>
          {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
        </form>
        {this.state.submittedValue &&
          <ul>
            <li><h4>Submitted Value: </h4> {this.state.submittedValue}</li>
            <li><h4>Calculated Difference: </h4>{this.state.calculatedDifference}</li>
            <li><h4>Number of Times Requested: </h4>{this.state.occurences}</li>
            <li><h4>Date of Time Requested: </h4>{this.state.dateTime}</li>
            {this.state.pastDateTime && <li><h4>Last Requested: </h4>{this.state.pastDateTime}</li>}
          </ul>
        }
      </div>
    );
  }
}

export default CalculatorForm;