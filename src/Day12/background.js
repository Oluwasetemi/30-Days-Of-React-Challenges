import React from 'react'

const NonCitrus = () => {
  return (
    <div>
      <h1>Non Citrus</h1>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  )
}

const Citrus = () => {
  return (
    <div>
      <h1>Citrus</h1>
      <ul>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
        <li>Lemon</li>
      </ul>
    </div>
  )
}


const Vegetables = () => {
  return (
    <div>
      <h1>Vegetables</h1>
      <ul>
        <li>Brussel</li>
        <li>Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  )
}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */}
        <NonCitrus />
        <Citrus />
        { /* change code above this line */}
      </div>
    );
  }
};

export { Fruits, Vegetables }