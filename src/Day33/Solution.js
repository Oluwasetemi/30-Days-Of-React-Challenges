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
    const {activeUsers} = this.state
    return (
      <div>
        <h2>Use the Lifecycle Method componentDidMount</h2>
        <h1>Active Users: { activeUsers }</h1>
      </div>
    );
  }
};