import {addTodo} from "../../Redux/slice";
import {useState} from "react";
import {useDispatch} from "react-redux";

import style from "./CreateTodo.module.css";

function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo));
    setTodo({
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.inputs}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </div>
    </form>
  );
}

export default CreateTodo;
