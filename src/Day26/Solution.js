import React from 'react'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    })
  }
  // change code above this line
  render() {
    return (
    <div>
      <h1>Use State to Toggle an Element</h1>
      <button onClick={this.toggleVisibility}>Click Me</button>
      {this.state.visibility ? <h1>Now you see me!</h1> : null}
    </div>
    )
  }
};