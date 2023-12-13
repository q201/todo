import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { changeStatus,delTodo, deleteItemAsync,changeItemStatus } from './todoSlice';
import { IconContext } from 'react-icons';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Container, Row, Col , Button} from 'react-bootstrap';

export default function Dispitem() {
  const value = useSelector((state) => state.post.value);
  const dispatch = useDispatch();
  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    const time12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    return time12;
  }

  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  useEffect(() => {
    setHoveredItemIndex(null); // Reset hoveredItemIndex when component mounts
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredItemIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex(null);
  };
  const comp=(index)=>{

    dispatch(changeStatus(index));
    dispatch(changeItemStatus(index));

  }
  const handleClick = (index) => {
    dispatch(delTodo(index));
    dispatch(deleteItemAsync(index));
    setHoveredItemIndex(null);
  };

  return ( 
    <>
      {console.log(value.task)}
      {Array.isArray(value) && value.length > 0 ? (
        value.map((item, index) => (
          !item.status ? (
            <ListGroup.Item
              key={index}
              as="li"
              className="d-flex mt-2 fs-5"
              variant="success"
              action
            >
              <Container>
                <Row>
                  <Col xs={11} md={11}>
                    <div className="fw-bold fs-4 w-100">{item.task}</div>
                    <small>
                      <b> Date:</b> {item.time.toString().substring(0, 15)}
                    </small>
                    <br />
                    <small>
                      <b> Time:</b>
                      {convertTo12HourFormat(item.time.toString().substring(15, 21))}
                    </small>
                    <br />
                    <span style={{}}>
                      <Button onClick={()=>{comp(index)}}size="sm" variant="success" className="variant-danger m-auto">
                        mark as complete
                      </Button>
                    </span>
                  </Col>
                  <Col xs={1} md={1}>
                    <IconContext.Provider value={{ size: '20px' }}>
                      <div
                        style={{
                          color: hoveredItemIndex === index ? 'red' : 'black',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                      >
                        <MdOutlineDeleteForever />
                      </div>
                    </IconContext.Provider>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ) : (
            <div key={index}></div>
          )
        ))
      ) : (
        <h3>List is empty</h3>
      )}
    </>
  );
  
}
