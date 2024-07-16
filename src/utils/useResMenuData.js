import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
import { MENU_ITEM_TYPE_KEY } from "../Config";

const useResMenuData = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // Get data from API
  useEffect(() => {
    //API call
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      // Fetch Restaurant Menu API
      const data = await fetch(FETCH_MENU_URL + id);
      console.log(data);
      const json = await data.json();
      async function checkJsonData(json) {
        // For Restaurants data.
        for (let i = 0; i < json?.data?.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.info;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      // For Restaurants Menu data.
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setRestaurant(resData);
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
  //return 'restaurant' and 'menuItems' data
  return [restaurant, menuItems];
};

export default useResMenuData;
