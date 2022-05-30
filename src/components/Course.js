import axios from 'axios';
import react from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { Card, CardText, CardBody, CardSubtitle, Button } from 'reactstrap';
import base_url from '../api/BootApi';

const Course = ({ course , update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (res) => {
        toast.success('Course Deleted Successfully');
        update(id);
      },
      (error) => {
        toast.error('Course Not Delete !! Server Problem');
      }
    );
  };

  return (
    <Card className='text-center'>
      <CardBody>
        <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className='text-center'>
          <Button
            onClick={() => {
              deleteCourse(course.id);
            }}
            color='danger'
          >
            Delete
          </Button>
          &nbsp;
          <Button color='warning'>Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
