import React from 'react'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h2>Use the Lifecycle Method componentDidMount</h2>
        <h1>Active Users: { /* change code here */}</h1>
      </div>
    );
  }
};