import React from 'react'

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this)
    // change code above this line
  }
  // change code below this line
  handleChange({target}) {
    this.setState({
      input: target.value
    })
  }
  // change code above this line
  render() {
    const {input} = this.state
    return (
      <div>
        <h2> Create a Controlled Input</h2>
        { /* change code below this line */}
        <input type="text" value={input} onChange={this.handleChange} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{input}</p>
      </div>
    );
  }
};
