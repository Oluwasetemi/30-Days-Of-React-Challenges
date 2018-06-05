import React from 'react'

export default class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ojo Oluwasetemi'
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}