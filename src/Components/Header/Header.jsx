import "./Header.css";
import logo from "../../ema-john-resources/images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="manu-list">
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Login</a>
      </div>
    </header>
  );
};

export default Header;
