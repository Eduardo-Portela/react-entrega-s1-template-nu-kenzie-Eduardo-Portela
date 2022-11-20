import { useState } from "react";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
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
      <Input
        required
        value={description}
        name={"Descrição"}
        className={"description"}
        handleInput={(event) => setDescription(event.target.value)}
        placeholder={"Digite aqui sua descrição"}
        type={"text"}
      />
      <cite>Ex: Compra de roupas</cite>
      <div className="values">
        <div className="div-value">
          <Input
            name={"Valor"}
            required
            value={value}
            type={"number"}
            placeholder={"R$"}
            handleInput={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="div-type-value">
          <Select
            name={"Tipo de valor"}
            handleSelect={(event) => setType(event.target.value)}
            entrada={"entrada"}
            saida={"saida"}
          />
        </div>
      </div>
      {children}
    </form>
  );
};
