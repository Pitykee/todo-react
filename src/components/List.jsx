import {} from "react";

// bootstrap
import {
  Button,
  Card,
  FormCheck,
  FormLabel,
  ListGroupItem,
  Row,
  Col,
  CardBody,
  ListGroup,
} from "react-bootstrap";

// context
import { TodoContext } from "../context/TodoContext";

const List = () => {
  return (
    <ListGroup>
      <ListGroupItem className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <FormCheck className="me-3" />
          <FormLabel className="m-0">A feladat</FormLabel>
        </div>
        <Button className="bi bi-trash" variant="danger"></Button>
      </ListGroupItem>
    </ListGroup>
  );
};

export default List;
