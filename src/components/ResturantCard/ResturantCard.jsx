const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  return (
    <div className="res-card-body">
      <img
        className="res-logo"
        alt="res-image-not-found"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3 className="res-card-name">{resData.name}</h3>
      <h4 className="res-card-cuisine">
        {resData.cuisines.length <= 3
          ? resData.cuisines.join(", ")
          : resData.cuisines.slice(1, 4).join(", ") + "..."}
      </h4>
      <h5 className="res-card-rate">
        {resData.avgRatingString == "NEW"
          ? "Newly Opened"
          : `${resData.avgRating}⭐`}
      </h5>
      <h5 className="res-card-rate">
        arriving time:{resData.sla.deliveryTime}
      </h5>
    </div>
  );
};

export default ResturantCard;
