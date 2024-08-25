import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    titulo: "",
    descripcion: "",
    selector: "pendiente",
    priority: false,
  });

  const { titulo, descripcion, selector, priority } = todo;

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (
      !isNaN(titulo) ||
      !titulo.trim() ||
      !isNaN(descripcion) ||
      !descripcion.trim()
    ) {
      Swal.fire({
        title: "Error!",
        text: "Por favor revise sus caracteres",
        icon: "error",
      });
    } /*else if (priority === false) {
      Swal.fire({
        title: "Error!",
        text: "Marque la casilla para continuar",
        icon: "error",
      });
      return;
    }  else if (selector === "seleccione") {
      Swal.fire({
        title: "Error!",
        text: "Por favor seleccione una de las opcines disponibles",
        icon: "error",
      });
      return;
    }*/
    addTodo({
      id: Date.now(),
      ...todo,
      selector: selector === "completado",
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleonChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });

    //console.log("ola");
  };

  return (
    <div>
      <form className="form-control mb-2" onSubmit={handleClickSubmit}>
        <input
          type="text"
          placeholder="Digite aca"
          className="form-control mb-2"
          name="titulo"
          value={titulo}
          onChange={handleonChange}
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Descripcion"
          value={descripcion}
          onChange={handleonChange}
        ></textarea>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            id="inputCheck"
            checked={priority}
            onChange={handleonChange}
          />
          <label htmlFor="inputCheck">Dar prioridad</label>
        </div>
        <select
          name="selector"
          className="form-select mb-2"
          value={selector}
          onChange={handleonChange}
        >
          <option value="seleccione">Seleccione</option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Agregar todo
        </button>
      </form>
    </div>
  );
};

export default Formulario;
