import React from "react";
import "./Zalanna.scss";
import { BiRun } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const img1 = require("./1.webp");
const img2 = require("./2.webp");
const img3 = require("./3.webp");
const img4 = require("./4.webp");
const img5 = require("./5.webp");
const img6 = require("./6.webp");

type product = {
  image: string;
  brand: string;
  desc: string;
};

const products: product[] = [
  {
    image: img1,
    brand: "NA-KD",
    desc: "OPEN FRONT FLOWY MINI DRESS",
  },
  {
    image: img2,
    brand: "Kaffe",
    desc: "DIANA WAISTCOAT - Liivi - sand/black",
  },
  {
    image: img3,
    brand: "7 for all mankind",
    desc: "UTILITY ZOEY LUXE SURPLUS",
  },
  {
    image: img4,
    brand: "Custommade",
    desc: "ALIA - Ylipolvensaappaat",
  },
  {
    image: img5,
    brand: "Marimekko",
    desc: "TASARAITA RELAXED SHORTSLEEVE",
  },
  {
    image: img6,
    brand: "Levi's®",
    desc: "SYDNEY CLASSIC TRENCH",
  },
];

const Zalanna = () => {
  let currentPosition: number = 0;

  const moveRight = () => {
    const adBrowser = document.querySelector(".card-advert-browser");
    if (currentPosition < 700) {
      currentPosition += 400;
      adBrowser?.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  };
  const moveLeft = () => {
    const adBrowser = document.querySelector(".card-advert-browser");
    if (currentPosition > 0) {
      currentPosition -= 400;
      adBrowser?.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  };

  const shuffleProducts = (array: product[]) => {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };

  return (
    <div className="zalanna-card">
      <button
        className="scrollbutton-left"
        onClick={() => {
          moveLeft();
        }}
      >
        <IoIosArrowBack color="white" size={30} />
      </button>
      <button
        className="scrollbutton-right"
        onClick={() => {
          moveRight();
        }}
      >
        <IoIosArrowForward color="white" size={30} />
      </button>
      <div className="card-advert-upper-box">
        <h4 className="company-text">Zalanna</h4>

        <div className="company-message">
          <h4 className="company-message-text">Nopea toimitus!</h4>
          <div className="fast-icon">
            <BiRun size={40} />
          </div>
        </div>
      </div>
      <div className="card-advert-browser">
        {shuffleProducts(products).map((product) => (
          <div className="card-advert">
            <img className="zalanna-img" src={product.image} />
            <div className="card-advert-title">{product.brand}</div>
            <div className="card-advert-text">{product.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zalanna;
