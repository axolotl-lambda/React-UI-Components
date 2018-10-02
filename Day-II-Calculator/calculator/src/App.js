import React, { Component } from 'react'
import './App.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

class App extends Component {
  state = {
    display: 0
  }

  handleInput = input => {
    this.setState({ display: this.state.display.concat(input) })
  }

  handleClear = () => {
    this.setState({ display: 0 })
  }

  render() {
    const { handleInput, handleClear } = this
    const { display } = this.state

    return (
      <div className="calculator-container">
        <div className="row display-row">
          <CalculatorDisplay>{display}</CalculatorDisplay>
        </div>
        <div className="row">
          <ActionButton width="3" color="white" fontColor="grey">
            clear
          </ActionButton>
          <ActionButton>÷</ActionButton>
        </div>
        {[[7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+']].map((row, i) => (
          <div className="row" key={i}>
            {row.map(
              (item, j, array) =>
                j !== array.length - 1 ? (
                  <NumberButton key={j}>{item}</NumberButton>
                ) : (
                  <ActionButton>{item}</ActionButton>
                )
            )}
          </div>
        ))}
        <div className="row">
          <NumberButton width="3">0</NumberButton>
          <ActionButton>=</ActionButton>
        </div>
      </div>
    )
  }
}

export default App
