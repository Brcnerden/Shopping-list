import ListGroup from "react-bootstrap/ListGroup";
import { BsFillTrashFill } from "react-icons/bs";
import * as T from "./ShoppingListStyled";
import { useState } from "react";
import "../../index.css";

function TodoWrapper({ task, deleteTodo }) {
  const [theme, setTheme] = useState(false);

  const toggleComplete = () => {
    theme === "unLined" ? setTheme("lined") : setTheme("unLined");
  };

  return (
    <>
      <T.InputStyle>
        <div className="d-flex gap-3">
          <ListGroup as="ul">
            <label>Product</label>
            <div>
              <ListGroup.Item
                id={theme}
                onClick={() => toggleComplete()}
                as="li"
                active
              >
                {task.task}
              </ListGroup.Item>
            </div>
          </ListGroup>
          <ListGroup as="ul">
            <label>Id</label>
            <div className="d-flex justify-content-between ">
              <ListGroup.Item as="li" active>
                {task.id}

                <BsFillTrashFill
                  className="ms-5"
                  onClick={() => deleteTodo(task.id)}
                />
              </ListGroup.Item>
            </div>
          </ListGroup>
        </div>
      </T.InputStyle>
    </>
  );
}

export default TodoWrapper;
