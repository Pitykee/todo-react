import { useContext } from "react";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";

// components
import Item from "./Item";
import List from "./List";

// context
import { TodoContext } from "../context/TodoContext";

const Form = () => {
  const { tasks } = useContext(TodoContext);
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center my-5">Todo app</h2>
        </Col>
      </Row>
      <Row>
        <Col className="mb-5">
          {tasks.map((task) => (
            <List task={task} key={task.id} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Item />
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
