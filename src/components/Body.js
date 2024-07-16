import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useResData from "../utils/useResData";
import useOnline from "../utils/useOnline";
import searchImg1 from "../assets/img/searchImg1.jpg";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData(); // call the Custum Hook.
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  className = "h-28 my-60 text-center text-2xl font-bold font-serif bg-red-600";

  // This below lines of code will show offline when our Internet are off.
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-700">
        <div className="p-8 md:p-16 text-center font-serif bg-slate-700 rounded-lg text-slate-300 shadow-lg shadow-slate-600 max-w-lg mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            🔴 No Internet, Please check your connection
          </h1>
          <ul className="list-inside text-sm md:text-base">
            <li>Checking the network cables, modem, and router</li>
            <li>Reconnecting to Wi-Fi</li>
          </ul>
        </div>
      </div>
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div
        className=" h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: "url(" + searchImg1 + ")" }}
      >
        <div className="text-center text-slate-50 font-serif">
          <h1 className="text-2xl font-bold">Welcome to SKM</h1>
          <h2 className="text-bold text-sm">Online food delivery App</h2>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="search-input p-1 m-1 w-60 rounded-sm bg-slate-900 text-white font-serif"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            autoFocus
          />

          <button
            className="search-btn p-2 m-2 w-20 bg-blue-800 text-white rounded-lg hover:bg-blue-600 font-serif"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-list flex flex-wrap justify-center  bg-slate-700 shadow-lg shadow-slate-600 ">
        {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
          (restaurants) => {
            return (
              <Link
                to={"/restaurant/" + restaurants.info.id}
                key={restaurants.info.id}
              >
                <RestaurantCard {...restaurants.info} />
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Body;
