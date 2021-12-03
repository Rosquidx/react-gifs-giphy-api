import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GidGrif from "./Components/GidGrif";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    'Ariana Grande'
  ]);

//   const handleAdd = () => {
//     setCategorias([...categorias, "Libelula"]);
    // setCategorias((cats) => [...cats, "Los 100"]);
//   };

  return (
    <div>
      <h2 className="titulo animate__animated animate__slideInLeft">GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias}/>
      <hr />

      {categorias.map((e) => (
        <GidGrif key={e} categoria={e}/>
      ))}
    </div>
  );
};

export default GifExpertApp;
