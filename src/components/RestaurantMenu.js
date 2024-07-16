import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useResMenuData from "../utils/useResMenuData";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // how to read a dynamic URL params.
  const params = useParams();
  const { id } = params;

  // 'useResMenuData' is a Custom made Hook.
  const [restaurant, menuItems] = useResMenuData(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const goBack = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu block bg-slate-600 font-serif">
      <div className="restaurant-info flex h-80 bg-slate-600 shadow-lg shadow-slate-100">
        <img
          className="m-5 p-5 shadow-lg shadow-slate-300"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <div className="restaurant-head inline text-center m-auto text-red-300 font-bold text-xl">
          <h1>Restaurant id : {id}</h1>
          <h2>{restaurant?.name}</h2>
          <h2>{restaurant?.areaName}</h2>
          <h2>{restaurant?.city}</h2>
          <h2>{restaurant?.avgRating} Stars</h2>
          <h2>{restaurant?.costForTwoMessage}</h2>
        </div>
        <button
          className="back-button w-28 h-10 p-2 m-6 rounded-lg bg-blue-500 text-white  hover:bg-blue-700"
          onClick={goBack}
        >
          Back
        </button>
      </div>

      <div className="menu-list block m-2 p-1 text-center shadow-lg shadow-slate-600">
        <div className="menu-heading font-bold text-2xl my-3 text-blue-100">
          <h1>Menu</h1>
        </div>
        <div className="items block text-center font-medium text-red-300">
          <ul>
            {menuItems?.map((item) => (
              <li key={item.id}>
                {item?.name} -{" "}
                <button
                  className="p-1 text-green-600 font-bold hover:text-slate-400"
                  onClick={() => addFoodItem(item)}
                >
                  ADD
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
