import Check from "../Icons/Check";
import {toggleComplete} from "../../Redux/slice";
import {useDispatch} from "react-redux";
import Complete from "../Icons/Complete";

import style from "./Todo.module.css";

function Todo({todo}) {
  const dispatch = useDispatch();

  function completeHandler() {
    dispatch(toggleComplete(todo.id));
  }

  return (
    <div className={style.container}>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <p>
        {todo.completed ? <Check /> : <Complete onClick={completeHandler} />}
      </p>
    </div>
  );
}

export default Todo;
