import { useContext, useState } from "react";

// bootstrap
import { Button, Card, CardBody, FormControl } from "react-bootstrap";

// utils
import { v4 as uuidv4 } from "uuid";

// context
import { TodoContext } from "../context/TodoContext";

const Item = () => {
  const { onSetTasks } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    if (!todo) return;

    onSetTasks({ id: uuidv4(), todo, completed: false });

    setTodo("");
  };
  return (
    <Card>
      <CardBody className="d-flex gap-3 shadow-lg">
        <FormControl
          value={todo}
          type="text"
          placeholder="Új teendő"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="success" disabled={!todo} onClick={handleSubmit}>
          Hozzáadás
        </Button>
      </CardBody>
    </Card>
  );
};

export default Item;
