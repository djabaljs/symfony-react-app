import React from "react";

import "./style.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Voitures",
      icon: "fas fa-car",
      subCategories:[
        {
          id: 1,
          name: "Toyota"
        },
        {
          id: 2,
          name: "Mercedes"
        },
        {
          id: 3,
          name: "Range Rover"
        }
      ]
    },
    {
      id: 2,
      name: "Maisons",
      icon: "fas fa-home",
      subCategories:[
        {
          id: 1,
          name: "Villa"
        },
        {
          id: 2,
          name: "Imeuble"
        },
        {
          id: 3,
          name: "Duplex"
        }
      ]
    },
    {
      id: 3,
      name: "Livres",
      icon: "fas fa-book",
      subCategories:[
        {
          id: 1,
          name: "Education"
        },
        {
          id: 2,
          name: "Sport"
        },
        {
          id: 3,
          name: "Amour"
        }
      ]
    },
    {
      id: 4,
      name: "Ordinateurs",
      icon: "fas fa-laptop",
      subCategories:[
        {
          id: 1,
          name: "Toshiba"
        },
        {
          id: 2,
          name: "HP"
        },
        {
          id: 3,
          name: "Dell"
        }
      ]
    },
    {
      id: 5,
      name: "Télévisions",
      icon: "fas fa-tv",
      subCategories:[
        {
          id: 1,
          name: "Samsung"
        },
        {
          id: 2,
          name: "LG"
        },
        {
          id: 3,
          name: "Grundig"
        }
      ]
    },
    {
      id: 6,
      name: "Téléphone",
      icon: "fas fa-mobile-alt",
      subCategories:[
        {
          id: 1,
          name: "Iphone"
        },
        {
          id: 2,
          name: "Samsung"
        },
        {
          id: 3,
          name: "Itel"
        }
      ]
    },
  ];

  return (
    <div className="container">
      <div className="cats">
        <div className="card cats-card">
          <div className="card-header cats-header">
            <a href="#">
              <h6>Catégories</h6>
            </a>
          </div>
          <div className="card-content cats-content">
            <div className="row">
              {categories.map((category) => (
                <div key={category.id} className="col-md-2 col-sm-3 col-xs-">
                  <a href="#" className="cats-link">
                    <i className={"icon " + category.icon}></i>
                    <p>{category.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cats-sub-cats">
        <div className="card cats-sub-cats-card">
          <div className="card-header cats-sub-cats-header">
            <a href="#">
              <h6>Liste des catégories et sous catégories</h6>
            </a>
          </div>
          <div className="card-content cats-sub-cats-content">
            <div className="row">
              {categories.map((category) => (
                <div key={category.id} className="col-md-3">
                  <a href="#">
                    <h6>{category.name}</h6>
                  </a>
                  <div className="sub-cats-item">
                    {
                      category.subCategories.map(subCategory => (
                        <p key={subCategory.id}>{subCategory.name}</p>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
