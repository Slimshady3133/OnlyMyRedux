import React from 'react';
import { TodoType, SetTodosType } from '../../store';
import TodoOne from './TodoOne';

function TodoList({
  todos,
  todosSet,
}: {
  todos: TodoType;
  todosSet: SetTodosType;
}): JSX.Element {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoOne key={todo.id} todo={todo} todosSet={todosSet} todos={todos} />
      ))}
    </div>
  );
}

export default TodoList;
