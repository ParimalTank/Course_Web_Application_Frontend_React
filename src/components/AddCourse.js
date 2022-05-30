import axios from 'axios';
import react, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import { Input } from 'reactstrap';
import base_url from '../api/BootApi';
import { toast } from 'react-toastify';

export const AddCourse = () => {
  useEffect(() => {
    document.title = 'Add Course';
  });

  const [course, setCourses] = useState({});

  //form handle function

  const handleForm = (e) => {
    console.log(course);
    e.preventDefault();
  };

  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (res) => {
        console.log(res);
        console.log('Success');
        toast.success('Course Added Successfully');
      },
      (error) => {
        console.log(error);
        console.log('error');
        toast.error('Something went Wrong');
      }
    );
  };

  return (
    <Fragment>
      <h1 className='text-center my-3'>Fill The Course Details </h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor='userId'>Course Id</label>
          <Input
            type='text'
            name='userId'
            id='userId'
            placeholder='Enter here'
            onChange={(e) => {
              setCourses({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor='title'>Course Title</label>
          <Input
            type='text'
            id='title'
            placeholder='Enter Title Here'
            onChange={(e) => {
              setCourses({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor='description'>Course Description</label>
          <Input
            type='textarea'
            id='description'
            placeholder='Enter Description Here'
            onChange={(e) => {
              setCourses({ ...course, desctiption: e.target.value });
            }}
          />
        </FormGroup>

        <Container>
          <Button type='submit' color='success'>
            Add Course
          </Button>
          &nbsp;
          <Button type='reset' color='warning'>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};
