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
      this.setState({errorMessage: 'Not a valid number for calculating difference.'})
    }
    return
  }

  onNumberChange = (inputNumber) => {
    const convertedInputNumber = parseInt(inputNumber);
    this.setState({numberToSubmit: convertedInputNumber})
  }

  onSubmitNumber = (e) => {
    e.preventDefault();

    this.checkValidNumber(this.state.numberToSubmit);

    try {
      fetch();
    } catch(e) {
      console.error(e);
      this.setState({errorMessage: e.errorMessage})
    } finally {
      if(!this.state.errorMessage) {
        this.setState({numberToSubmit: 0})
      }
    }
  }

  render() {
    return (
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
    );
  }
}

export default CalculatorForm;