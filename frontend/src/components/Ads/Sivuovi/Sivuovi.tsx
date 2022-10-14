import React from "react";
import "./Sivuovi.scss";
import { RiDoorOpenLine } from "react-icons/ri";
const img1 = require("./1.jpeg");
const img2 = require("./2.jpeg");

const Sivuovi = () => {
  return (
    <div className="ad">
      <div className="box-t red">
        <div className="adicon">
          <RiDoorOpenLine color={"rgb(235, 235, 235)"} size={30} />
        </div>

        <h5 className="ad-name">Sivuovi.fi</h5>
        <div className="adtext">Siellä on asuntoja</div>
      </div>
      <div className="box-i">
        <div className="adhouse">
          <img className="adimg" src={img1} alt="houseimg" />
          <div>Lintula Valkeakoski, Omakotitalo</div>

          <div>146 m², 370 000 €</div>
        </div>
        <div className="adhouse">
          <img className="adimg" src={img2} alt="houseimg" />
          <div>Matari Vantaa omakotitalo</div>

          <div>92 m², 375 000 €</div>
        </div>
      </div>
    </div>
  );
};

export default Sivuovi;
