import React from 'react'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this)
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div style={{
        textDecoration: 'underline red',
        textShadow: `
          2px -1px 6px #ffc600, 
          2px -1px 2px orange, 
          2px -1px 4px green
          `
      }}>
        {/* change code below this line */}
        <button onClick={this.addItem} 
          style={{
            padding: '10px'
        }}>Click Me -></button>
        { /* change code above this line */}
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};