import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addTasks } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTasks: (obj) => dispatch(addTasks(obj)),
  };
};
const Addtask = ({ addTasks, tasks }) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      addTasks({
        id: Math.random(),
        description: task,
        isDone: false,
      });
      setTask("");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <InputGroup className="my-5">
              <FormControl
                placeholder="Add Task..."
                onChange={(e) => handleInput(e)}
                value={task}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={() => add()}>
                  Add Task
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Addtask);
