import { useState } from "react";
import "./index.css";

export const Form = ({ newValue, children }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const bills = {
      description,
      type,
      value,
    };
    setDescription("");
    setValue("");
    newValue(bills);
  };

  return (
    <form className="container-mobile form" onSubmit={handleSubmit}>
      <label htmlFor="">Descrição</label>
      <input
        className="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        placeholder="Digite aqui sua descrição"
        type="text"
      />
      <cite>Ex: Compra de roupas</cite>
      <div className="values">
        <div className="div-value">
          <label htmlFor="">Valor</label>
          <input
            value={value}
            type="number"
            placeholder="1"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="div-type-value">
          <label htmlFor="">Tipo de valor</label>
          <select
            name=""
            id=""
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Selecione o tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      {children}
    </form>
  );
};
