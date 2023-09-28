import { FormEvent, useState } from 'react';
import { formatDate } from './utils/date';
import classes from './App.module.css';

type Todo = {
  id: string;
  title: string;
  createdAt: Date;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();

    // Extract form values from From Element.
    const data = new FormData(event.target as HTMLFormElement);
    const formValues = Object.fromEntries(data.entries());
    const title = formValues.title as string;

    if (title) {
      // Update local state with new TODO item.
      const newTodo = { id: crypto.randomUUID(), title, createdAt: new Date() };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      // Reset form fields after submit.
      const titleElement = document.getElementsByName('title')[0] as HTMLInputElement;
      titleElement.value = '';
    }
  };

  return (
    <main>
      <h1>TO DO</h1>
      <form className={classes.form} onSubmit={handleAddTodo}>
        <input className={classes.formInput} name="title" placeholder="Item to do..." />
        <button className={classes.formButton} type="submit">
          Add
        </button>
      </form>
      <ul className={classes.list}>
        {todos.map((todo) => {
          return (
            <li className={classes.listItem} key={todo.id}>
              <p>{todo.title}</p>
              <p>{formatDate(todo.createdAt)}</p>
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default App;
