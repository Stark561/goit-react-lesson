export const getTodoSelector = state => {
  const filter = state.todo.filter;
  const todoArr = state.todo.todo;

  return todoArr.filter(task =>
    task.todoName.toLowerCase().includes(filter.toLowerCase())
  );
};
