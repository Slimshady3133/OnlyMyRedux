import { Todo, TodoBody, TodoId } from '../store';

export const loadTodos = async (): Promise<Todo[]> => {
  try {
    const result = await fetch('http://localhost:4000/api/tasks');
    const data = await result.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const delTodos = async (todo: Todo): Promise<Todo> => {
  try {
    const res = await fetch(`http://localhost:4000/api/tasks/${todo.id}`, {
      method: 'DELETE',
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const addTodo = async (bodyText: TodoBody): Promise<Todo> => {
  try {
    const res = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: bodyText,
      }),
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (bodyText: TodoBody, id: TodoId): Promise<Todo> => {
  try {
    const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: bodyText,
      }),
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const updDone = async (updTodo: Todo): Promise<Todo> => {
  try {
    const res = await fetch(`http://localhost:4000/api/tasks/upd/${updTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done: updTodo.done,
      }),
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
};
