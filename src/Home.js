import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import Addtask from './Addtask';
import TodoItem from './TodoItem';
import Completed from './Completed';

function Home() {
  return (
    <Container className="mt-3">
      <Row className="g-x-3">
        <Col md="" variant="primary">
          <h3>Add New Task</h3>
          <Addtask />
        </Col>
        <Col style={{ backgroundColor: 'rgba()' }} className="shadow-primary rounded p-2">
          <Container className="mt-4">
            <h3>List of Completed Tasks</h3>
            <div className="container">
              <ListGroup as="ol" id="myList" numbered>
                <Completed />
              </ListGroup>
            </div>
          </Container>
        </Col>
        <Col  md="" className="shadow-primary rounded p-2">
          <Container fluid className="mt-4">
            <h3>List of Tasks</h3>
            <div className="container">
              <TodoItem />
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
