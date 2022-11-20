import React from "react";

export const Select = ({ name, handleSelect, entrada, saida }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <select required name={name} id="" onChange={handleSelect}>
        <option value="">Selecione o tipo</option>
        <option value={entrada}>Entrada</option>
        <option value={saida}>Saída</option>
      </select>
    </>
  );
};
