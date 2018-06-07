import React from 'react'

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const { name } = this.state
    // change code above this line
    return (
      <div style={{
        textDecoration: 'underline'
      }}>
        <h2> Render State in the User Interface Another Way</h2>
        { /* change code below this line */}
        <h1>{name}</h1>
        { /* change code above this line */}
      </div>
    );
  }
};

export default MyComponent