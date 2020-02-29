import React, { Component } from 'react';
import { withFirebase } from '../../../../services/firebase';

import Jobs from '../../../../components/Home/Admin/Jobs';

class JobsContainer extends Component {
  state = { jobs: [] };

  componentDidMount() {
    const { firebase } = this.props;

    firebase
      .getJobs()
      .then(querySnapshot => {
        let jobs = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();

          if (data.jobs) {
            jobs = jobs.concat(data.jobs);
          }
        });

        this.setState({ jobs });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <Jobs jobs={this.state.jobs} />;
  }
}

export default withFirebase(JobsContainer);