import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, filterTodoAction } from 'store/todo/actions';
import { getTodoSelector } from 'store/todo/selectors';

function TodoPage() {
  const todo = useSelector(getTodoSelector);

  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(deleteTodoAction(id));
  };

  const onInputFilterChange = ({ target: { value } }) => {
    dispatch(filterTodoAction(value));
  };

  return (
    <>
      <input type="text" onChange={onInputFilterChange} />
      <ul>
        {todo.map(task => (
          <li key={task.id}>
            <p>{task.todoName}</p>
            <button onClick={() => onDeleteBtnClick(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
