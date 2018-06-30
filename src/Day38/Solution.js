import React from 'react'

const styles = {
  color: 'purple',
  padding: '5vmin',
  fontSize: '5ch',
  border: '2px solid purple',
  borderRadius: 3
}
// change code above this line
export default class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};
