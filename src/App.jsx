import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List/List";
import { TotalMoney } from "./components/TotalMoney";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { Card } from "./components/Card";
import { DashBoard } from "./components/DashBoard/DashBoard";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [navPage, setNavPage] = useState(false);

  const addValue = (newValue) => {
    return setListTransactions([...listTransactions, newValue]);
  };

  const [filteredTransactions, setFilteredTransactions] = useState("todos");

  const setFilterTransactions = (type) => {
    setFilteredTransactions(type);
  };

  const filterTransactions = listTransactions.filter((transaction) => {
    return filteredTransactions == "todos"
      ? true
      : transaction.type == filteredTransactions;
  });

  const removeTransaction = (transaction) => {
    const listRemove = listTransactions.filter(
      (element) => element != transaction
    );
    setListTransactions(listRemove);
  };

  return (
    <div className="app">
      {navPage ? (
        <DashBoard>
          <Header>
            <Button name="Inicio" callback={() => setNavPage(false)} />
          </Header>

          <div className="container-mobile div-media-query">
            <div className="form-balance">
              <Form newValue={addValue}>
                <Button callback={() => addValue} name="Inserir valor" />
              </Form>
              <TotalMoney listTransactions={filterTransactions} />
            </div>

            <List>
              <div className="btn-filters">
                <h4>Resumo financeiro</h4>
                <div className="btns">
                  <Button
                    name={"Todos"}
                    callback={() => setFilterTransactions("todos")}
                  />
                  <Button
                    name={"Entrada"}
                    callback={() => setFilterTransactions("entrada")}
                  />
                  <Button
                    name={"Saida"}
                    callback={() => setFilterTransactions("saida")}
                  />
                </div>
              </div>
              <Card
                listTransactions={filterTransactions}
                removeTransaction={removeTransaction}
              />
            </List>
          </div>
        </DashBoard>
      ) : (
        <HomePage>
          <Button name={"Iniciar"} callback={() => setNavPage(true)} />
        </HomePage>
      )}
    </div>
  );
}

export default App;
