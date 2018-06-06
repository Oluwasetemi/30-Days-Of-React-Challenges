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

        { /* change code above this line */}
      </div>
    );
  }
};

export default MyComponent