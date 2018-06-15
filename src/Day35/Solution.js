import React from 'react'

export class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps){
    console.log(this.props, nextProps)
  }
  componentDidUpdate(){
    console.log('the component has updated')
  }
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

export class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Message'
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

