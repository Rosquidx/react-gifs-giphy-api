import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategorias }) => {
  const [valorInput, setValorInput] = useState('');
  const handleInputChange = (e) => {
    setValorInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valorInput.trim().length > 2) {
      setCategorias((cats) => [valorInput, ...cats]);
      setValorInput('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Buscar">Buscar gif deseado: </label><input type="search" placeholder="Dragon ball" value={valorInput} onChange={handleInputChange} />
      </form>
    </div>
  );
};

AddCategory.propType = {
  setCategorias: PropTypes.func.isRequired,
};
export default AddCategory;
