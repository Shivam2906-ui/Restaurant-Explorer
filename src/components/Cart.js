import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <div className="bg-slate-600 shadow-lg shadow-slate-600">
      <h1 className=" p-2 font-bold text-3xl text-slate-300">
        Cart Items - {cartItems.length}
      </h1>

      <div className="flex justify-between">
        <button
          className=" p-2 m-2 w-28 h-10 bg-green-600 font-medium rounded-lg hover:bg-green-500 "
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <button
          className="back-button w-28 h-10 p-2 m-2 rounded-lg bg-blue-500 text-white  hover:bg-blue-700"
          onClick={goBack}
        >
          Back
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
