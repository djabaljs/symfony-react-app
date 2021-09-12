import React from "react";
import { Link } from "react-router-dom";
import Advert from "../../components/Advert";

import "./style.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Voitures",
      icon: "fas fa-car",
      subCategories: [
        {
          id: 1,
          name: "Toyota",
        },
        {
          id: 2,
          name: "Mercedes",
        },
        {
          id: 3,
          name: "Range Rover",
        },
      ],
    },
    {
      id: 2,
      name: "Maisons",
      icon: "fas fa-home",
      subCategories: [
        {
          id: 1,
          name: "Villa",
        },
        {
          id: 2,
          name: "Imeuble",
        },
        {
          id: 3,
          name: "Duplex",
        },
      ],
    },
    {
      id: 3,
      name: "Livres",
      icon: "fas fa-book",
      subCategories: [
        {
          id: 1,
          name: "Education",
        },
        {
          id: 2,
          name: "Sport",
        },
        {
          id: 3,
          name: "Amour",
        },
      ],
    },
    {
      id: 4,
      name: "Ordinateurs",
      icon: "fas fa-laptop",
      subCategories: [
        {
          id: 1,
          name: "Toshiba",
        },
        {
          id: 2,
          name: "HP",
        },
        {
          id: 3,
          name: "Dell",
        },
      ],
    },
    {
      id: 5,
      name: "Télévisions",
      icon: "fas fa-tv",
      subCategories: [
        {
          id: 1,
          name: "Samsung",
        },
        {
          id: 2,
          name: "LG",
        },
        {
          id: 3,
          name: "Grundig",
        },
      ],
    },
    {
      id: 6,
      name: "Téléphone",
      icon: "fas fa-mobile-alt",
      subCategories: [
        {
          id: 1,
          name: "Iphone",
        },
        {
          id: 2,
          name: "Samsung",
        },
        {
          id: 3,
          name: "Itel",
        },
      ],
    },
  ];

  const localities = [
    {
      id: 1,
      name: "Abidjan",
      adverts: [
        {
          id: 1,
          name: "Toyota Yaris boite auto",
          description: "Toya yaris boite auto avec tous les papiers à jour.",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Mercedes GL boite auto",
          description: "Mercedes GL boite auto avec tous les papiers à jour.",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Range Rover boite auto",
          description: "Range Rover boite auto avec tous les papiers à jour.",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 2,
      name: "Yamoussokro",
      adverts: [
        {
          id: 1,
          name: "Duplex",
          description: "Duplex sur un terrain de 500m2",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Bouaké",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 4,
      name: "Bouaké",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 5,
      name: "Abingourou",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 6,
      name: "Abingourou",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 7,
      name: "Tiasalé",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
    {
      id: 8,
      name: "Adiaké",
      adverts: [
        {
          id: 1,
          name: "Iphone X occasion",
          description:
            "Iphone X occassion, état de la battérie 90%, état du téléphone 98%, troc possible",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
        {
          id: 1,
          name: "Samsugn A30 neuf",
          description: "Samsung A30 neuf moins chère, état du téléphone 100%",
          createdAt: "2021:09:11 07:10:37",
          category: 1,
        },
      ],
    },
  ];

  const adverts = [
    {
      id: 1,
      name: "Toyata Yaris occasion",
      description:
        "Toyota Yaris occasion en très bon état avec tous les papiers à jour.",
      price: 2500000,
      images: [
        {
          id: 1,
          url: "data:image/jpeg;base64,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",
          advert: {
            id: 1,
          },
        },
        {
          id: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVZMCyWkZAvcmvZ5GhqzBRyv_99RadzobGxEaJuMKH2CX7ZuGz6wmTve6auozJ2mThA4&usqp=CAU",
          advert: {
            id: 1,
          },
        },
        {
          id: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBD7RbQlVBcdZ8GrCzK23wYLoqB__K0Wb6e5xGrChXhWhNJZ_mpmujz26EEt4ZJOhPpJU&usqp=CAU",
          advert: {
            id: 1,
          },
        },
      ],
      category: {
        id: 1,
        name: "Voiture",
        icon: "fas fa-car",
      },
      locality: {
        id: 1,
        name: "Abidjan",
      },
      createdAt: "11/09/2021 09:30:23",
    },
    {
      id: 2,
      name: "Villa basse",
      description:
        "Villa base à vendre moins chère, avec tous les papiers qu'il faut pour la vente.",
      price: 2500000,
      images: [
        {
          id: 1,
          url: "https://www.maisonsclairlogis.fr/wp-content/uploads/2021/07/montcalm_maison-neuve_exterieur-zoom.png",
          advert: {
            id: 1,
          },
        },
        {
          id: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbkQoG2WyekZNQgS1QdPjbp0vKZ8b3s7cY6r2nCksMxVGmZK2nZcb_mkV-vrKZhPUj2w&usqp=CAU",
          advert: {
            id: 1,
          },
        },
        {
          id: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa1BZH68IAM67PSPNYvlZuqDwng9afePbYcwCDYBl8lwXaw_Kn1iQzh5mWTiT2X-K_qk&usqp=CAU",
          advert: {
            id: 1,
          },
        },
      ],
      category: {
        id: 1,
        name: "Voiture",
        icon: "fas fa-home",
      },
      locality: {
        id: 1,
        name: "Abidjan",
      },
      createdAt: "11/09/2021 09:30:23",
    },
    {
      id: 3,
      name: "Iphone 12 Pro max tout neuf",
      description:
        "Iphone 12 pro max tout neuf, état 100%, tu prends, te connecte directement .",
      price: 650000,
      images: [
        {
          id: 1,
          url: "data:image/jpeg;base64,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",
          advert: {
            id: 1,
          },
        },
        {
          id: 2,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJnOj09pZuiGKcO2qkOSknKDHDV8FeC3DBKL4W5PRrghTbTk24DR-HJZ-VYRD3ZknILo&usqp=CAU",
          advert: {
            id: 1,
          },
        },
        {
          id: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuWXhxcGn7zSbQEu92Wc4-m6VwIwDotprcQgOYOzo79ieGm3pchFC3m53iJfePULiI5A&usqp=CAU",
          advert: {
            id: 1,
          },
        },
      ],
      category: {
        id: 1,
        name: "Téléphone",
        icon: "fas fa-mobile",
      },
      locality: {
        id: 1,
        name: "Abidjan",
      },
      createdAt: "11/09/2021 09:30:23",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="cats">
          <div className="card cats-card">
            <div className="card-header cats-header">
              <a href="#">
                <h6>Les catégories les plus visitées</h6>
              </a>
            </div>
            <div className="card-content cats-content">
              <div className="row">
                {categories.map((category) => (
                  <div key={category.id} className="col-md-2 col-sm-3 col-4">
                    <Link to="/annonces" className="cats-link">
                      <i className={"icon " + category.icon}></i>
                      <p>
                        {category.name} ({category.subCategories.length})
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cats-sub-cats">
          <div className="card cats-sub-cats-card">
            <div className="card-header cats-sub-cats-header">
              <a href="#">
                <h6>Sous catégories</h6>
              </a>
            </div>
            <div className="card-content cats-sub-cats-content">
              <div className="row">
                {categories.map((category) => (
                  <div key={category.id} className="col-md-3 col-4 col-sm-4">
                    <a href="#">
                      <h6>{category.name}</h6>
                    </a>
                    <div className="sub-cats-item">
                      {category.subCategories.map((subCategory) => (
                        <p key={subCategory.id}>{subCategory.name}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="localities">
          <div className="card">
            <div className="card-header localities-header">
              <a href="#">
                <h6>Localités</h6>
              </a>
            </div>
            <div className="card-content localities-content">
              <div className="row">
                {localities.map((locality) => (
                  <div
                    key={locality.id}
                    className="col-md-3 col-4 col-sm-4 localities-item"
                  >
                    <a href="#">
                      <h6>
                        {locality.name} ({locality.adverts.length})
                      </h6>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="adverts">
          <div className="card">
            <div className="card-content adverts-content">
              <div className="row">
                {adverts.map((advert) => (
                  <div>
                    <Advert key={advert.id} advert={advert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
