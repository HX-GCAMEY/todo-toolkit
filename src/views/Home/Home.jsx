import {useSelector} from "react-redux";
import CreateTodo from "../../components/CreateTodo/CreateTodo";
import Navbar from "../../components/Navbar/Navbar";
import TodoList from "../../components/TodoList/TodoList";

import style from "./Home.module.css";

function Home() {
  const {todos} = useSelector((state) => state.todos);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>TODO</h3>
        <CreateTodo />
      </div>
      <Navbar />
      <div>
        <h3>Todo List</h3>
        {todos.length === 0 && <p>No Todos</p>}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default Home;
