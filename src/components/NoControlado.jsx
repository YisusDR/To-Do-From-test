import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setError("");
    const data = new FormData(form.current);
    const { texto, descripcion, seleccion } = Object.fromEntries([
      ...data.entries(),
    ]);
    //validaciones
    if (!texto.trim() || !descripcion.trim() || !seleccion.trim()) {
      setError("Error algunas de las casillas esta en blaco o malos datos");
    }
    /*else if (!isNaN(texto) || !isNaN(descripcion)) {
      alert("Error usted digito numeros");
    }*/

    console.log(texto, descripcion, seleccion);
  };

  return (
    <div>
      <form onSubmit={handleClick} className="form-control mb-2" ref={form}>
        <input
          type="text"
          placeholder="Anotalo"
          className="form-control mb-2"
          name="texto"
          defaultValue={"Buenas tardes"}
        />
        <textarea
          name="descripcion"
          placeholder="Describe"
          className="form-control mb-2"
          defaultValue={"Son muy buenas tardes"}
        ></textarea>
        <select name="seleccion" className="form-select mb-2" defaultValue={""}>
          <option value=""></option>
          <option value="completado">Completado</option>
          <option value="pendiente">Pendiente</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Cargar
        </button>
        {error !== "" && error}
      </form>
    </div>
  );
};

export default NoControlado;
