import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from './todoSlice';

export default function FetchData() {
//const value = useSelector((state) => state.post.value);
const dispatch = useDispatch();

  useEffect(() => {
    console.log("TodoItem->")
    fetch('http://localhost:2000/getitem', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('automatic setting task 1st time:', data);
        dispatch(addTodo(data));
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
}