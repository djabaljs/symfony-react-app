import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

import "./style.scss";
const AdvertDetails = ({ history }) => {
  const advert = history.location.state;

  const changeImage = (element) => {
    var main_prodcut_image = document.getElementById("main_product_image");
    main_prodcut_image.src = element.target.currentSrc;
  };

  return (
    <div className="advert-details">
      <div className="container">
        <Link to="/">
          <i className="fas fa-arrow-circle-left back-icon"></i>
        </Link>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  {" "}
                  <img
                    src={advert.images[0].url}
                    id="main_product_image"
                    width="350"
                  />{" "}
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    {advert.images.map((image, index) => (
                      <li key={index}>
                        <img
                          onClick={changeImage}
                          src={advert.images[index].url}
                          width="70"
                          height="50"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{advert.name}</h3>{" "}
                  <span className="heart">
                    <i className="fas fa-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>{advert.description}</p>
                </div>
                <h3>
                  <CurrencyFormat
                    value={advert.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" Cfa"}
                  />
                </h3>
                <div className="d-flex flex-row align-items-center">
                 <p><i className="fas fa-map-marker-alt"></i> {advert.locality.name}</p>
                </div>
                <div className="mt-5">
                 makert
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  {" "}
                  <button className="btn btn-dark">Contactez</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetails;
