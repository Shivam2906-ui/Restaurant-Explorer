import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../Config";
import useOnline from "./useOnline";

const useResData = () => {
  // This is a normal Javascript variable.and suppose any component update that variable but React does not know the variable is updated. So that is because I have to create State variable and all the state variable i have created React keep a track of that variable.And whenever i update that variable it will automatically
  // const searchbtn = "hello";

  // searchText is a state variable and to make state variable use 'useState()' hooks function which comes from React.
  const [allRestaurants, setAllRestaurants] = useState([]); // default or initial value of 'useState' hooks is restrauntList. 'restraunts' and 'restrauntList' are same.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
    console.log("useEffect");
  }, []);

  async function getRestaurants() {
    try {
      // Fetch restaurant API
      const data = await fetch(FETCH_RESTAURANT_URL);
      const json = await data.json();
      console.log(json);

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(json) {
        for (let i = 0; i < json?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      // Optional chaining
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }
  return [allRestaurants, filteredRestaurants];
};

export default useResData;
