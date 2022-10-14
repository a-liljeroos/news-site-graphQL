import React from "react";
import { FaInfo } from "react-icons/fa";
const Contacts = () => {
  window.scrollTo(0, 0);
  return (
    <div className="card-container">
      <div className="card-icon-top">
        <FaInfo color="#dc0000" size={50} />
      </div>
      <div className="card-block lift-title">
        <h3 className="card-subheadline">Media Suomi Oy</h3>
        <div className="card-bullets">
          <ul className="card-ul">
            <li>puh 010 000 000*</li>
            <li>fax 010 000 0000</li>
            <li>Sähköposti: uutisets@uutiset.fi ja [etunimi].</li>
            <li>[sukunimi]@uutiset.fi</li>
            <li>PL 0, 00000 Helsinki</li>
            <li>Käyntiosoite: Televisiokatu 33</li>
          </ul>
          <ul className="card-ul">
            <li>Julkaisija:Media Suomi Oy</li>
            <li>Uutiset, ISSN 0000-0000</li>
            <li>Sanomalehtien Liiton jäsen</li>
            <li>Painopaikka: Lauttasaari</li>
          </ul>
        </div>
      </div>
      <div className="card-block">
        <h3 className="card-subheadline">Laskutusosoite:</h3>
        <h4>Otamme vastaan verkkolaskuja osoitteella:</h4>
        <div className="card-bullets">
          <ul className="card-ul">
            <li>Media Suomi Oy</li>
            <li>OVT-tunnus 00000000000</li>
            <li>Y-tunnus 000000-0</li>
            <li>Operaattori Operaattori Oy</li>
          </ul>
          <h4>Laskussa tulee olla viitetietona tilaajan nimi.</h4>
        </div>
      </div>
      <div className="card-block">
        <h3 className="card-subheadline">Toimitus</h3>

        <div className="card-bullets">
          <ul className="card-ul">
            <li>Juhlava Arvo, vastaava päätoimittaja</li>
          </ul>
          <ul className="card-ul">
            <li>Kaustinen Veikko, uutispäätoimittaja</li>
          </ul>
          <ul className="card-ul">
            <li>Vihjepuhelin: 000 00 0000</li>
            <li>Sähköposti: uutiset@uutiset.fi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
