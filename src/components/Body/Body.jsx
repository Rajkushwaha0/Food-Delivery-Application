import { useState } from "react";
import { resturantCardDetails } from "../../utils/mockData";
import ResturantCard from "../ResturantCard/ResturantCard";

const Body = () => {
  const [mockData, setMockData] = useState(resturantCardDetails);
  function handleFilterResturant() {
    const resturantdata = resturantCardDetails.filter(
      (res) => res.info.avgRating >= 4
    );
    setMockData(resturantdata);
  }
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
