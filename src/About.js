import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import Addtask from './Addtask';
import TodoItem from './TodoItem';
function Home() {
   
  return (
    <Container className="mt-3">
       <Row>
       <Col md="6" variant="primary"  >
        <h3>Add New Task</h3>
        <Addtask/>
   
       
        </Col>
       <Col></Col>
        
      <Col>
        <Container fluid className="mt-4" >
        <h3>List of Tasks</h3>
        <div className="container" >
            <TodoItem/>
        </div>
         
        </Container>
       </Col>
       </Row>
       </Container>
  );
}

export default Home;