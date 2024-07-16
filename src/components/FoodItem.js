import { IMG_CDN_URL } from "../Config";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 text-center bg-slate-800 shadow-md shadow-slate-100 text-green-300 rounded-2xl hover:bg-slate-700 font-serif">
      <img
        className="h-52 w-full p-2 rounded-2xl shadow-sm shadow-slate-300"
        src={IMG_CDN_URL + imageId}
      />
      <h2 className="font-bold text-lg py-2">{name}</h2>
      <h5>{description}</h5>
      <h4 className="font-semibold">Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
