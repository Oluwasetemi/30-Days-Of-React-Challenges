import React from 'react'

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        { /* change code below this line */}
        <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        { /* change code above this line */}
      </div>
    );
  }
};

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        { /* change code below this line */}
        <ReturnTempPassword tempPassword='sdjemdmss' />
        { /* change code above this line */}
      </div>
    );
  }
};