import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

import "./style.scss";
const Advert = ({ advert }) => {
  return (
    <div className="advert">
      <div className="row border-bottom">
        <div className="col-3">
          <div className="advert-img">
            <img
              className="img-fluid"
              src={advert.images.length > 0 ? advert.images[0].url : ""}
              alt="advert-img"
            />
          </div>
        </div>
        <div className="col-9">
          <div className="advert-content">
            <div className="first">
              <h4 className="title">{advert.name}</h4>
              <h6 className="price">
                <CurrencyFormat
                  value={advert.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" Cfa"}
                />
              </h6>
            </div>
            <div className="second">
              <div className="details">
                <p>
                  <i className={advert.category.icon}></i>{" "}
                  {advert.category.name}
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {advert.locality.name}
                </p>
                <p>
                  <i className="fas fa-clock"></i> {advert.createdAt}
                </p>
              </div>
            </div>
            <div className="third">
              <Link to={{ pathname: "/annonces/details", state: advert }}>
                <button className="btn btn-primary btn-xs">Voir</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
