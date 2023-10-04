import {filterTodos} from "../../Redux/slice";
import {useDispatch} from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  function filterHandler(e) {
    const completed = e.target.value;
    dispatch(filterTodos(completed));
  }

  return (
    <form>
      <label>Filter Todos</label>
      <select onChange={filterHandler}>
        <option value="all">All</option>
        <option value={true}>Completed</option>
        <option value={false}>Pending</option>
      </select>
    </form>
  );
}

export default Navbar;
