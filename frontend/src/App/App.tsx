import React, { useEffect } from 'react';
import './App.css';
import * as api from './api';
import TodoList from '../Components/Todos/TodoList';
import AddTodo from '../Components/Todos/AddTodo';
import { useTodos, loadTasks } from '../store';

function App(): JSX.Element {
  const [todos, todosSet] = useTodos([]);
  useEffect(() => {
    api.loadTodos().then((data) => todosSet(loadTasks(data)));
  }, [todosSet]);
  return (
    <div>
      <TodoList todos={todos} todosSet={todosSet} />
      <AddTodo todos={todos} todosSet={todosSet} />
    </div>
  );
}

export default App;
