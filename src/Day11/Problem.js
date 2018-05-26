import React from 'react'

const NonCitrus = () => {
  return (
    <div>
      <h1>Non Citrus</h1>
    </div>
  )
}

const Citrus = () => {
  return (
    <div>
      <h1>Citrus</h1>
    </div>
  )
}

const Vegetables = () => {
  return (
    <div>
      <h1>Vegetables</h1>
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
        
        { /* change code above this line */}
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */}

        { /* change code above this line */}
        <Vegetables />
      </div>
    );
  }
};

export default TypesOfFood