import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
 
import {Container, Row, Col} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo} from './todoSlice'

const App = () => {
   
  return (
    <>
      <Container onMouseEnter={(e)=>{ (e.currentTarget.style.backgroundColor='rgba(25,135,84,1)')}}
            onMouseLeave={(e)=>{ (e.currentTarget.style.backgroundColor='rgba(8, 140, 78,.8)')}} 
            className="   text-center  rounded-4 display-4 mt-2 fw-bold "
            style={{backgroundColor:"rgba(8, 140, 78,.8)"}} >
        <Row >
          <Col   className="rounded-lg p-2" >To do List</Col>
        </Row>
        </Container>
    <Router>
      <Routes>
       <Route exact path="/" element={<Home/>} />

      </Routes>
    </Router></>
  );
};
export default App;
