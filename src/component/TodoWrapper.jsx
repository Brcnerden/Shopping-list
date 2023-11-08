import ListGroup from "react-bootstrap/ListGroup";
import { BsFillTrashFill } from "react-icons/bs";

function TodoWrapper({ task, deleteTodo, toggleComplete }) {
  return (
    <>
      <div className="d-flex gap-3">
        <ListGroup as="ul">
          <label>Product</label>
          <div
            className={`${task.completed ? "completed" : " "}`}
            onClick={() => toggleComplete(task.id)}
          >
            <ListGroup.Item as="li" active>
              {task.task}
            </ListGroup.Item>
          </div>
        </ListGroup>
        <ListGroup as="ul">
          <label>Id</label>
          <div className="d-flex">
            <ListGroup.Item as="li" active>
              {task.id}
              <BsFillTrashFill onClick={() => deleteTodo(task.id)} />
            </ListGroup.Item>
          </div>
        </ListGroup>
      </div>
    </>
  );
}

export default TodoWrapper;
