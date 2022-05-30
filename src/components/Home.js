import { Button, Card } from 'react-bootstrap';
import { CardText, CardTitle } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { Allcourses } from './Allcourses';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';
  });

  return (
    <div>
      <Card body color='primary' inverse>
        <CardTitle tag='h5'>
          Here All Courses Are There Click On View To See All The Course
        </CardTitle>
        <CardText></CardText>
        <Link to={<Allcourses />} className='btn btn-primary'>
          View
        </Link>
      </Card>
    </div>
  );
};

export default Home;
