import "./index.css";
import React from "react";
import { FaTrash } from "react-icons/fa";
import nocard from "../../assets/img/nocard.png";

export const List = ({ listTransactions, children, removeTransaction }) => {
  return (
    <div>
      <ul className="container-mobile list-transactions">
        <div className="btn-filters">
          <h4>Resumo financeiro</h4>
          <div className="btns">{children}</div>
        </div>

        {listTransactions.length ? (
          listTransactions.map((item, index) => (
            <li key={index} className="transaction">
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
      </ul>
    </div>
  );
};
