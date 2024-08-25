import React, { useState } from "react";

const Dog = () => {
  const [dog, setDog] = useState({
    nombre: "Firulais",
    segundonombre: "Dexter",
    edad: 5,
  });

  const handleClick = () => {
    //setDog({ ...dog, edad: dog.edad + 1 });
    setDog((prev) => ({ ...prev, edad: dog.edad + 1 }));

    if (dog.edad == 30) {
      alert("rey tocate el qlo, deja el botoncito");
    }
  };
  return (
    <div className="card">
      <h2>
        El nombre mi perro es: {dog.nombre}, su segundo nombre es:{" "}
        {dog.segundonombre}, y su edad es: {dog.edad}
      </h2>
      <button onClick={handleClick} className="btn btn-primary mb-2">
        Click aca para subirle los anios
      </button>
    </div>
  );
};

export default Dog;
