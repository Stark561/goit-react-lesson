import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodos } from 'services/users-api';

const Todos = () => {
  const [userTodos, setUserTodo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getTodo = async () => {
      try {
        const { todos } = await getTodos(id);
        setUserTodo(todos);
      } catch (error) {
        console.log(error);
      }
    };
    getTodo();
  }, [id]);

  return (
    userTodos && (
      <ul>
        {userTodos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    )
  );
};

export default Todos;
