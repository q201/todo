import {Row,Col,Form,Button} from 'react-bootstrap';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addonclick, saveItemAsync} from './todoSlice'

export default function Addtask(props) {
  
  const dispatch=useDispatch();
    
    const [task, setTask] = useState({});

   const handleClick= async (event)=>{
          event.preventDefault();
          console.log(task==={})
          if(!(task.time===undefined)){
          dispatch(addonclick(task)); 
         dispatch(saveItemAsync(task));}
         else console.log("content is empty")
    };
  return (
    <Form>
      <Row className="align-items-center">
        <Col  sm="9">
          
          <Form.Control onSubmit={handleClick}
             
            className="mb-2  d-inline-block"
            id="inlineFormInput"
            placeholder="new task"
            value={task.ctask}
            onChange={(e) => setTask({status:false,task:e.target.value,time:Date()})}
          />
        </Col>
        <Col>
          <Button type="submit" onClick={handleClick} className="mb-2 px-4">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}