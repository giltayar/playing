const React = require('react')
const Display = require('./display')
const Keypad = require('./keypad')
const calculator = require('./calculator')

module.exports = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {calculator: calculator.initialState}
  }

  render () {
    return (
      <div>
        <Display display={this.state.calculator.display} />
        <Keypad onKeypad={(key) =>
          this.setState({calculator: calculator.nextState(this.state.calculator, key)})} />
      </div>
    )
  }
}
