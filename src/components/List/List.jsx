import "./index.css";
import React from "react";

export const List = ({ children }) => {
  return (
    <div className="list-transactions">
      <ul className="container-mobile list-transactions">{children}</ul>
    </div>
  );
};
