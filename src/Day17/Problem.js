import React from 'react'

const Items = (props) => {
  return <h2>Current Quantity of Items in Cart: {props.quantity}</h2>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return (
      <div>
        <h1>Shopping Cart Component</h1>
        <Items />
      </div>
    )
    { /* change code above this line */ }
  }
};

export default ShoppingCart 
