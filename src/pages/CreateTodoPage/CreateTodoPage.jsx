import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodoAction } from 'store/todo/actions';
import { addTodo } from 'store/todo/todoSlice';

function CreateTodoPage() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setTask(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!task.trim()) return;

    dispatch(addTodo(task));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button>Create todo</button>
    </form>
  );
}

export default CreateTodoPage;
