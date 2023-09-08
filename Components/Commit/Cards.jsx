import React from "react";
import { NavLink } from "react-router-dom";
import "./Cards.css";
function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="container-p">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <img src={imgsrc} className="center" />
                <h5 className="card-title">{title}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
