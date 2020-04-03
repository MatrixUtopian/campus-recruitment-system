import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Jobs = ({ _id, jobs, handleApply }) => {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Jobs
        </Card.Header>
        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  <td>
                    {job.applicants.includes(_id) ? (
                      <Button variant="success" disabled>
                        Applied
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        data-id={job._id}
                        onClick={handleApply}
                      >
                        Apply
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

Jobs.propTypes = {
  _id: PropTypes.string.isRequired,
  jobs: PropTypes.array.isRequired,
  handleApply: PropTypes.func.isRequired
};

export default Jobs;
