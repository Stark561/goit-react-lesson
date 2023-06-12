import { useDispatch, useSelector } from 'react-redux';
// import { deleteTodoAction, filterTodoAction } from 'store/todo/actions';
import { getTodoSelector } from 'store/todo/selectors';
import { deleteTodo, filterTodo, reverseStatus } from 'store/todo/todoSlice';

function TodoPage() {
  const todo = useSelector(getTodoSelector);

  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(deleteTodo(id));
  };

  const onInputFilterChange = ({ target: { value } }) => {
    dispatch(filterTodo(value));
  };
  const changeStatus = id => {
    dispatch(reverseStatus(id));
  };
  return (
    <>
      <input type="text" onChange={onInputFilterChange} />
      <ul>
        {todo.map(task => (
          <li key={task.id}>
            <p>{task.todoName}</p>
            <p>Completed: {`${task.completed}`}</p>
            <button onClick={() => onDeleteBtnClick(task.id)}>Delete</button>
            <button onClick={() => changeStatus(task.id)}>Change status</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
