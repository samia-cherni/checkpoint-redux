import React, { useState } from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button,Container,Row,Col } from "react-bootstrap";
import {
  addTasks,
  updateTasks,
  removeTasks,
  completeTasks,
} from "../redux/reducer";
import Task from "./Task";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTasks: (obj) => dispatch(addTasks(obj)),
    removeTasks: (id) => dispatch(removeTasks(id)),
    updateTasks: (obj) => dispatch(updateTasks(obj)),
    completeTasks: (id) => dispatch(completeTasks(id)),
  };
};
const ListTask = ({ tasks, removeTasks, updateTasks, completeTasks }) => {
  const [sort, setSort] = useState("active");
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 9, offset: 2 }}>
        <ButtonGroup className="my-3">
          <Button variant="outline-secondary" onClick={() => setSort("active")}>View Active Tasks</Button>
          <Button variant="outline-secondary" onClick={() => setSort("completed")}>
            View Complete Tasks
          </Button>
          <Button variant="outline-secondary" onClick={() => setSort("all")}>View All</Button>
        </ButtonGroup>
        <ul>
          {tasks.length > 0 && sort === "active"
            ? tasks.map((item) => {
                return (
                  item.isDone === false && (
                    <Task
                      key={item.id}
                      item={item}
                      removeTasks={removeTasks}
                      updateTasks={updateTasks}
                      completeTasks={completeTasks}
                    />
                  )
                );
              })
            : null}
          {tasks.length > 0 && sort === "completed"
            ? tasks.map((item) => {
                return (
                  item.isDone === true && (
                    <Task
                      key={item.id}
                      item={item}
                      removeTasks={removeTasks}
                      updateTasks={updateTasks}
                      completeTasks={completeTasks}
                    />
                  )
                );
              })
            : null}
          {tasks.length > 0 && sort === "all"
            ? tasks.map((item) => {
                return (
                  <Task
                    key={item.id}
                    item={item}
                    removeTasks={removeTasks}
                    updateTasks={updateTasks}
                    completeTasks={completeTasks}
                  />
                );
              })
            : null}
        </ul>
        </Col>
        </Row>
        </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
