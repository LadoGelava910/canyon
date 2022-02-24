import React from "react";
import "./Tours.css";
const TourItem = ({ item }) => {
  return (
    <div className="tour_item">
      <h5>{item.title}</h5>
      <div className="d-flex">
        <div className="img_box">
          <img src={item.img} alt={item.title} />
          <div className="level">Level: Medium</div>
        </div>
        <div className="text">
          <p>{item.location}</p>
          <p>{item.location2}</p>
          <p>{item.description}</p>
          <p>Driving time {item.drivingTime}</p>
          <p>Hiking {item.hiking}</p>
          <p>Canyoning {item.canyoning}</p>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
