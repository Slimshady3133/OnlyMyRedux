import React, { useState } from 'react';
import { addTask, SetTodosType, Todo } from '../../store';
import * as api from '../../App/api';

function AddTodo({
  todos,
  todosSet,
}: {
  todos: Todo[];
  todosSet: SetTodosType;
}): JSX.Element {
  const [body, setBody] = useState('');
  return (
    <form onSubmit={() => api.addTodo(body).then(() => todosSet(addTask(todos, body)))}>
      <input
        type="text"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button type="submit">Add new task</button>
    </form>
  );
}

export default AddTodo;
