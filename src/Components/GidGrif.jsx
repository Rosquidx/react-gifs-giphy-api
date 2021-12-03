import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GridGifItem from "./GridGifItem";


const GidGrif = ({categoria}) => {

  const {data:images, loading} = useFetchGifs(categoria);


  return (
    <>
      <h3 className="">{categoria}</h3>

      {loading && <p className="animate__animated animate__slideInDown">Cargando...</p>}

      <div className="card-grid">
        {images.map((e) => (
          <GridGifItem key={e.id} {...e} />
        ))}
      </div>
    </>
  );
}
export default GidGrif;

