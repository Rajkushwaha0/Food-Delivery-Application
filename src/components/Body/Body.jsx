import { useEffect, useState } from "react";
import { resturantCardDetails } from "../../utils/mockData";
import ResturantCard from "../ResturantCard/ResturantCard";

const Body = () => {
  const [mockData, setMockData] = useState([]);
  function handleFilterResturant() {}

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4148245&lng=80.23213129999999&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/homepage/getCards?lat=26.4148245&lng=80.23213129999999"
    // );
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setMockData(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home-body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterResturant}>
          Top Rated Resturants
        </button>
        <button
          className="filter-reset-btn"
          onClick={() => setMockData(resturantCardDetails)}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {mockData &&
          mockData.map((res) => {
            return <ResturantCard resData={res.info} />;
          })}
      </div>
    </div>
  );
};
export default Body;
