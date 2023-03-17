import React from "react";
import "./BestSellerCard.css";

function BestSellerCard(props) {
  const card_width = props.width;

  return (
    <>
      <div className="col m-3 d-flex justify-content-center">
        <div
          className="card best-seller-card"
          style={{ width: { card_width } }}
        >
          <img src={props.src} className="card-img-top" alt={props.src} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellerCard;
