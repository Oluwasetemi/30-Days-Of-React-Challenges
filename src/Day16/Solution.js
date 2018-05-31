import React from 'react'

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      Items: {props.items}
    </div>
  )
};
// change code below this line
ShoppingCart.defaultProps = { items: 0 }
export default ShoppingCart
