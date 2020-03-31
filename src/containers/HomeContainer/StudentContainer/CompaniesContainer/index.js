import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Companies from '../../../../components/Home/Student/Companies';

class CompaniesContainer extends Component {
  state = { companies: [] };

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    const { firebase } = this.props;

    firebase
      .getCompanies()
      .then(querySnapshot => {
        const companies = [];

        querySnapshot.forEach(doc => companies.push(doc.data()));

        this.setState({ companies });
      })
      .catch(error => console.log(error.message));
  };

  render() {
    return <Companies companies={this.state.companies} />;
  }
}

export default withFirebase(CompaniesContainer);
