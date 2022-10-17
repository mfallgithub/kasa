import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const ratings = [3];

const starArray = [...Array(5).keys()].map((i) => i + 1);

const Rating = ({ rating }) =>
  starArray.map((i) => (
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      color={rating >= i ? "#ff6060" : "lightgrey"}
    />
  ));
function Star() {
  return (
    <div className="Star">
      {ratings.map((rating, i) => (
        <div key={i}>
          <Rating rating={rating} />
        </div>
      ))}
    </div>
  );
}
export default Star;
