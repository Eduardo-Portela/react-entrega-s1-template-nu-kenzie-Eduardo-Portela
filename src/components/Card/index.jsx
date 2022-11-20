import React from "react";
import { FaTrash } from "react-icons/fa";
import nocard from "../../assets/img/nocard.png";
import "./index.css";

export const Card = ({ listTransactions, removeTransaction }) => {
  return (
    <>
      {listTransactions.length ? (
        listTransactions.map((item, index) => (
          <li
            key={index}
            className={
              item.type == "entrada"
                ? "transaction border-green"
                : "transaction border-red"
            }
          >
            <div className="desc-type">
              <h4>{item.description}</h4>
              <p>{item.type}</p>
            </div>
            <div className="value-remove">
              <p>R$ {item.value}</p>
              <button onClick={() => removeTransaction(item)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="no-card">
          <h2>Você não Possui nenhum lançamento</h2>
          <img src={nocard} alt="" />
        </li>
      )}
    </>
  );
};
