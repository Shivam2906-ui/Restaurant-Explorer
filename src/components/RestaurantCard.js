import { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../utils/userContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card1 w-56 p-2 m-2 my-4  shadow-md shadow-slate-300 text-center font-serif hover:bg-slate-500 bg-opacity-5 rounded-2xl text-green-300">
      <img
        className="h-52 w-full p-2 rounded-2xl shadow-sm shadow-slate-300"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-xl my-1 ">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRatingString} Stars</h4>
      // <h5 className="font-bold">{user.name}</h5>
    </div>
  );
};

export default RestaurantCard;
