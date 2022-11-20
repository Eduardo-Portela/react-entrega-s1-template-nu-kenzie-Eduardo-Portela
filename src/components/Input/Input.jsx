import React from "react";

export const Input = ({
  name,
  className,
  value,
  handleInput,
  placeholder,
  type,
}) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        required
        className={className}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};
