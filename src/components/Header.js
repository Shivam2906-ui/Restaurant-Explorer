import { useContext } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="h-16 p-2" src={Logo} alt="Logo" />
    </a>
  );
};

const Header = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 shadow-lg shadow-slate-400 p-2 md:p-4">
      <div className="flex items-center">
        <img
          src="https://clipground.com/images/circle-clipart-logo-1.jpg"
          alt="Logo"
          className="w-8 h-8 mr-2"
        />
        <a href="/">
          <h1 className="px-1 font-bold font-serif">S.K.M</h1>
        </a>
        <ul className="flex flex-col md:flex-row ml-4 font-serif">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center py-2">
        <h1 className="p-2">{isOnline ? "✅" : "🔴"}</h1>
        <span className="p-2 font-bold font-serif text-red-900">
          {user.name}
        </span>
      </div>
    </div>
  );
};

export default Header;
