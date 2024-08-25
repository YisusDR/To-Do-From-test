import Formulario from "./components/Formulario";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";

const initialStatesTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStatesTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };
  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.selector = !todo.selector;
      }
      return todo;
    });
    setTodos(newArray);
  };
  /*
  const updateTodoPrioridad = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.priority = !todo.priority;
      }
      return todo;
    });
    setTodos(newArray);
  };*/
  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority === true) return -1;
      if (a.priority === false) return 1;
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formulario</h1>
      <Formulario addTodo={addTodo} />
      <Todos
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        /* updateTodoPrioridad={updateTodoPrioridad}*/
      />
    </div>
  );
};

export default App;
