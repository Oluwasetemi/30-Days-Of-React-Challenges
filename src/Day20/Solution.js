import React from 'react'
import PropTypes from 'prop-types'

const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}

Camper.defaultProps = {
  name: 'CamperBot'
}

export default class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Using Props with Stateless Functional Components</h1>
        <Camper />
      </div>
    );
  }
};
// change code below this line
