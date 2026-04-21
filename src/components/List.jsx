import { useContext, useState } from "react";

// bootstrap
import {
  Button,
  FormCheck,
  FormLabel,
  ListGroupItem,
  ListGroup,
  Modal,
} from "react-bootstrap";

// context
import { TodoContext } from "../context/TodoContext";

const List = ({ task }) => {
  const { onToggleTask, onDeleteTask } = useContext(TodoContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const success = task.completed
    ? "bg-success text-decoration-line-through"
    : "";

  return (
    <>
      <ListGroup className="mb-2 shadow-lg">
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
            onClick={() => {
              setSelectedId(task.id);
              setShowModal(true);
            }}
          ></Button>
        </ListGroupItem>
      </ListGroup>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="border-0 shadow-lg"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Törlés megerősítése</Modal.Title>
        </Modal.Header>

        <Modal.Body className="">
          Biztosan törölni szeretnéd ezt a feladatot?
        </Modal.Body>

        <Modal.Footer className="border-0 d-flex justify-content-center gap-2">
          <Button
            variant="outline-secundary"
            onClick={() => setShowModal(false)}
          >
            Mégse
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              onDeleteTask(selectedId);
              setShowModal(false);
            }}
          >
            Igen, törlöm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default List;
