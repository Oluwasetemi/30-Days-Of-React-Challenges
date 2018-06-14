import React from 'react'

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
      <div>
        <h2>Pass State as Props to Child Components</h2>
        <Navbar /* your code here */ />
      </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: /* your code here */ </h1>
      </div>
    );
  }
};