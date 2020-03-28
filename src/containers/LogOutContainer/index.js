import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import LogOut from '../../components/LogOut';

class LogOutContainer extends Component {
  handleLogOut = () => {
    const { firebase, removeUser } = this.props;

    firebase
      .logOut()
      .then(() => removeUser())
      .catch(error => console.log(error.message));
  };

  render() {
    return <LogOut handleLogOut={this.handleLogOut} />;
  }
}

export default compose(
  connect(null, { removeUser }),
  withFirebase
)(LogOutContainer);
