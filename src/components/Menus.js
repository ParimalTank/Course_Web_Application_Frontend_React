import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

export const Menus = () => {
  return (
    <ListGroup>
      <Link
        className='list-group-item list-group-item-action'
        tag='a'
        to='/'
        action
      >
        Home
      </Link>

      <Link
        className='list-group-item list-group-item-action'
        tag='a'
        to='/add-course'
        action
      >
        Add Courses
      </Link>

      <Link
        className='list-group-item  list-group-item-action'
        tag='a'
        to='/view-courses'
        action
      >
        View Courses
      </Link>

      <Link
        className='list-group-item list-group-item-action'
        tag='a'
        to='#!'
        action
      >
        About Us
      </Link>

      <Link
        className='list-group-item list-group-item-action'
        tag='a'
        to='#!'
        action
      >
        Contect Us
      </Link>
    </ListGroup>
  );
};
