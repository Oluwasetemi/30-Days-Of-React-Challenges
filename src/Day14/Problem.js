import React from 'react'


const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */}
      <p>The current date is:  </p>
      { /* change code above this line */}
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */}
        <CurrentDate />
        { /* change code above this line */}
      </div>
    )
  }
}

export default Calendar