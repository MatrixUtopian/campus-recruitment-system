import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import LogIn from '../../components/LogIn';

class LogInContainer extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, setUser } = this.props;
    const { email, password } = this.state;

    firebase
      .logIn(email, password)
      .then(success => {
        const user = success.user;
        // console.log(user);

        return firebase.getUser(user.uid);
      })
      .then(querySnapshot => {
        const userData = querySnapshot.data();
        setUser({ user: userData });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({ error: errorMessage });
      });
  };

  render() {
    return (
      <LogIn
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withFirebase
)(LogInContainer);