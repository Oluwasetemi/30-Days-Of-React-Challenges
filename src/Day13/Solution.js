import React from 'react'
import { render } from 'react-dom'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

render(<MyComponent />, document.getElementById('root'))