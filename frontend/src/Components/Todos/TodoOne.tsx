import React, { useState } from 'react';
import {
  removeTask,
  Todo,
  toggleTask,
  updateTask,
  SetTodosType,
  TodoType,
} from '../../store';
import * as api from '../../App/api';

export default function TodoOne({
  todo,
  todos,
  todosSet,
}: {
  todo: Todo;
  todos: TodoType;
  todosSet: SetTodosType;
}): JSX.Element {
  const [newTask, setTask] = useState(todo.body);
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        name="done"
        onChange={() => {
          api.updDone(todo).then(() => todosSet(toggleTask(todos, todo.id)));
        }}
      />
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() =>
          api.delTodos(todo).then(() => todosSet(removeTask(todos, todo.id)))
        }
      >
        delete
      </button>
      <button
        type="button"
        onClick={() =>
          api
            .updateTodo(newTask, todo.id)
            .then(() => todosSet(updateTask(todos, todo.id, newTask)))
        }
      >
        update
      </button>
    </div>
  );
}
