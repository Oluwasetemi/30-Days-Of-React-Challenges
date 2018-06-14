import React from 'react'

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        <h2>Manage Updates with Lifecycle Methods</h2>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message} />
      </div>
    );
  }
};