import {} from "react";

// bootstrap
import { Button, Card, CardBody, Col, FormControl, Row } from "react-bootstrap";

// context
import { TodoContext } from "../context/TodoContext";

const Item = () => {
  return (
    <Card>
      <CardBody className="d-flex gap-3">
        <FormControl type="text" placeholder="Új teendő" />
        <Button variant="success">Hozzáadás</Button>
      </CardBody>
    </Card>
  );
};

export default Item;
