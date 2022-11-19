import "./index.css";

export const TotalMoney = ({ listTransactions }) => {
  const sumBills = () => {
    const sum = listTransactions.reduce((initial, current) => {
      return current.type == "entrada"
        ? initial + Number(current.value)
        : initial - Number(current.value);
    }, 0);
    return Number(sum);
  };
  return (
    <div className=" container-mobile div-result">
      <div className="value-result">
        <h3>Valor total:</h3>
        <p>$ {sumBills()}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
