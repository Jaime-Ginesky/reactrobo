import React from "react";
import "../components/Card.css";

const Card = (props) => {
  const { name,email,id } = props;
  return (
    <div className="card">
      <div className="grow">
      <div className="cardInfo">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} class=".img-fluid" />
      <div className="text-center">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Card;