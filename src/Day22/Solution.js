import React from 'react'

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>Render State in the User Interface</h1>
        { /* change code below this line */}
          <h1>{ this.state.name }</h1>
        { /* change code above this line */}
      </div>
    );
  }
};

export default MyComponent