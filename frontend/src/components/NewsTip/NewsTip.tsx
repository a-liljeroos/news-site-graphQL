import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewsTip.scss";
import { BsCameraFill } from "react-icons/bs";
import Sivuovi from "../Ads/Sivuovi/Sivuovi";
import FormSubmitted from "../FormSubmitted/FormSubmitted";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState } from "react";

interface Values {
  tip: string;
  name: string;
  email: string;
  phone: string;
  file: string;
}

const NewsTip = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);

  return (
    <>
      {showFormSubmitted ? (
        <FormSubmitted message="Kiitos juttuvinkistä!" countDownSeconds={4} />
      ) : null}

      <div className="newstip-container">
        <div className="newstip-cameraicon">
          {" "}
          <BsCameraFill color="#dc0000" size={50} />
        </div>

        <h2 className="newstip-title">
          Kuulitko uutisen tai kiinnostavan puheenaiheen? Otitko kuvan tai
          videon?
        </h2>
        <p className="newstip-para">
          Uutiset kaipaa lukijoiltaan uutisvihjeitä, kuvia, videoita,
          nettilinkkejä, jutunaiheita tai muuta kiinnostavaa ja yllätyksellistä
          uutismateriaalia. Uutisissa julkaistuista kuvista maksamme kuvan
          uutisarvon mukaisen summan, kuitenkin vähintään 30 euroa.
          Julkaistuista videoista maksamme vähintään 50 euroa.
        </p>
        <ul className="newstip-list">
          <li>
            Lähetä kuva, video tai uutisvihje osoitteeseen{" "}
            <a href="mailto:toimitus@uutiset.fi">toimitus@uutiset.fi.</a> Liitä
            mukaan yhteystietosi.
          </li>
          <li>Soita numeroon 000 000 000</li>
          <li>
            Lähetä teksti, kuva, video tai WhatsApp-viesti numeroon 000 000 000.
            Kirjoita mukaan kuvaajan nimi, yhteystiedot sekä mahdolliset muut
            kuvaan liittyvät tiedot
          </li>
          <li>Lähetä vihjeesi alla olevalla lomakkeella</li>
        </ul>
        <Formik
          initialValues={{
            tip: "",
            name: "",
            email: "",
            phone: "",
            file: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            console.log(JSON.stringify(values, null, 2));
            setShowFormSubmitted(true);
            var x = setInterval(() => {
              setShowFormSubmitted(false);
              navigate("/news-site-template");
              clearInterval(x);
            }, 4000);
          }}
        >
          <Form>
            <div className="newstip-form">
              <label className="newstip-form-label">* Kerro uutisvihje</label>
              <Field as={"textarea"} name="tip" required />
              <div className="input-group1">
                <label className="newstip-form-label">Yhteystiedot</label>
                <p>
                  Täytähän yhteystiedot, jos haluat, että vastaamme viestiisi.
                  Käsittelemme yhteystiedot luottamuksellisesti.
                </p>
              </div>
              <div className="input-group1">
                <label className="newstip-form-label"> Nimi</label>
                <br />
                <Field name="name" type="text" />
              </div>
              <div className="input-group1">
                <label className="newstip-form-label"> Sähköpostiosoite</label>
                <br />
                <Field name="email" type="email" />
              </div>
              <div className="input-group1">
                <label className="newstip-form-label"> Puhelinnumero</label>
                <br />
                <Field name="phone" type="number" />
              </div>
              <div className="input-group1">
                <label className="newstip-form-label">
                  Asiaan liittyvät kuvat tai videot: (Liitteiden yhteiskoko max.
                  50 MB)
                </label>
                <br />
                <div className="file-upload-container">
                  <label className="file-upload-label">
                    <Field name="file" type="file" />
                    Lataa liite
                  </label>
                </div>
              </div>
              <div className="button-group">
                <button>PERUUTA</button>
                <button className="btn-red" type="submit">
                  LÄHETÄ
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <Sivuovi />
    </>
  );
};

export default NewsTip;
