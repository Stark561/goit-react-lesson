import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, filterTodoAction } from 'store/todo/actions';

function TodoPage() {
  const [filter, setFilter] = useState('');
  const { todo, filteredTodo } = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(deleteTodoAction(id));
  };

  const onInputFilterChange = ({ target: { value } }) => {
    setFilter(value);
    dispatch(filterTodoAction(value));
  };

  return (
    <>
      <input type="text" onChange={onInputFilterChange} value={filter} />
      <ul>
        {(filter ? filteredTodo : todo).map(task => (
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
