import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Students from '../../../../components/Home/Company/Students';

class StudentsContainer extends Component {
  state = { students: [] };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    const { firebase } = this.props;

    firebase
      .getStudents()
      .then(querySnapshot => {
        const students = [];

        querySnapshot.forEach(doc => students.push(doc.data()));

        this.setState({ students });
      })
      .catch(error => console.log(error.message));
  };

  render() {
    return <Students students={this.state.students} />;
  }
}

export default withFirebase(StudentsContainer);
