import { useContext } from "react";

// bootstrap
import {
  Button,
  FormCheck,
  FormLabel,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";

// context
import { TodoContext } from "../context/TodoContext";

const List = ({ task }) => {
  const { onToggleTask, onDeleteTask } = useContext(TodoContext);

  const success = task.completed
    ? "bg-success text-decoration-line-through"
    : "";

  return (
    <ListGroup>
      <ListGroupItem className={`d-flex justify-content-between ${success}`}>
        <div className="d-flex align-items-center">
          <FormCheck
            className="me-3"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <FormLabel className="m-0">{task.todo}</FormLabel>
        </div>
        <Button
          className="bi bi-trash"
          variant="danger"
          onClick={() => onDeleteTask(task.id)}
        ></Button>
      </ListGroupItem>
    </ListGroup>
  );
};

export default List;
