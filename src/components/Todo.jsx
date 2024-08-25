import React from "react";
import Todos from "./Todos";

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { titulo, descripcion, selector, priority, id } = todo;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${selector && "text-decoration-line-through"}`}>
            {titulo}
          </h5>
          <p className={`${selector && "text-decoration-line-through"}`}>
            {descripcion}
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(id)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-sm btn-warning"
              onClick={() => updateTodo(id)}
            >
              Actualizar
            </button>
          </div>
        </div>
        <span className="badge text-bg-primary">
          {priority && "Prioritario"}
        </span>
      </div>
    </li>
  );
};

export default Todo;
