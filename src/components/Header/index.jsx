import logo from "../../assets/img/nu-kenzie.png";
import "./index.css";

export const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container-mobile div-header">
        <img src={logo} alt="" />
        {children}
      </div>
    </header>
  );
};
