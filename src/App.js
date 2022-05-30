import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import { Allcourses } from './components/Allcourses';
import { AddCourse } from './components/AddCourse';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import Header from './components/Header';
import { Menus } from './components/Menus';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/add-course' element={<AddCourse />} />
                <Route exact path='/view-courses' element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
