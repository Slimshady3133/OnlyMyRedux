/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';

export type Todo = {
  id: number;
  body: string;
  done: boolean;
};

export type TodoId = Todo['id'];

export type TodoBody = Todo['body'];

export const loadTasks = (tasks: Todo[]) => {
  const loadedTasks = tasks;
  return loadedTasks;
};

export const updateTask = (tasks: Todo[], id: TodoId, body: TodoBody): Todo[] =>
  tasks.map((task) => ({
    ...task,
    body: task.id === id ? (task.body = body) : task.body,
  }));

export const toggleTask = (tasks: Todo[], id: TodoId): Todo[] =>
  tasks.map((task) => ({
    ...task,
    done: task.id === id ? !task.done : task.done,
  }));

export const removeTask = (tasks: Todo[], id: TodoId): Todo[] =>
  tasks.filter((task) => task.id !== id);

export const addTask = (tasks: Todo[], body: TodoBody): Todo[] => [
  ...tasks,
  {
    id: Math.max(0, Math.max(...tasks.map(({ id }) => id))) + 1,
    body,
    done: false,
  },
];

export const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);
export type UseTodosType = ReturnType<typeof useTodos>;
export type TodoType = UseTodosType[0];
export type SetTodosType = UseTodosType[1];
