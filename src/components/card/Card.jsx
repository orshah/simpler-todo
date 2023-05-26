import "./card.style.css";
import PropTypes from "prop-types";

import React from "react";

function Card(props) {
  const { name, picture, description } = props.cardData;
  // console.log(props);
  return (
    <div className="name-card">
      <img src={picture} alt="portraits"></img>
      <div className="text">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Card;
