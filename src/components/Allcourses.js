import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from './Course';
import base_url from '../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Allcourses = () => {
  useEffect(() => {
    document.title = 'All Courses';
  });

  //function to call server

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (res) => {
        console.log(res.data);
        toast.success('Course Has Been Loaded');
        setCourses(res.data);
      },
      (error) => {
        console.log(error);
        toast.error('Something went wrong');
      }
    );
  };

  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    // { title: 'Java Course', description: 'This is Demo Course' },
    // { title: 'Spring Boot Course', description: 'This is Spring Boot Course' },
    // { titlte: 'React Js Course', description: 'This is React Js Course' },
    // { titlte: 'Angular Js Course', description: 'This is Angular Js Course' },
  ]);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List Of Courses are as Follows</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
        : 'No Courses Found'}
    </div>
  );
};
