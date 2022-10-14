import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdConnectWithoutContact } from "react-icons/md";
import { Formik, Form, Field, FormikHelpers } from "formik";
import FormSubmitted from "../FormSubmitted/FormSubmitted";

interface Values {
  reason: string;
  feedback: string;
  name: string;
  email: string;
  phone: string;
  file: string;
}

const Feedback = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);

  return (
    <>
      {showFormSubmitted ? (
        <FormSubmitted message="Kiitos palautteesta!" countDownSeconds={4} />
      ) : null}
      <div className="card-container">
        <div className="card-icon-top">
          <MdConnectWithoutContact color="#dc0000" size={50} />
        </div>
        <h3 className="card-headline lift-title">Palaute</h3>

        <Formik
          initialValues={{
            reason: "",
            feedback: "",
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
            <div className="card-form">
              <label className="card-form-label">* Palautteen syy</label>
              <Field as={"select"} name="reason" required>
                <option value="Juttupalaute">Juttupalaute</option>
                <option value="Palautetta toimitukseen">
                  Palautetta toimitukseen
                </option>
                <option value="Palautetta tekniikasta">
                  Palautetta tekniikasta
                </option>
                <option value="Palautetta mainoksista">
                  Palautetta mainoksista
                </option>
              </Field>
              <label className="card-form-label">* Palaute</label>
              <Field name="feedback" as={"textarea"} required />
              <h4 className="card-subheadline">Yhteystiedot</h4>
              <p>
                Täytähän yhteystiedot, jos haluat, että vastaamme viestiisi.
                Käsittelemme yhteystiedot luottamuksellisesti.
              </p>
              <div className="input-group1">
                <label className="card-form-label"> Nimi</label>
                <br />
                <Field name="name" type="text" />
              </div>
              <div className="input-group1">
                <label className="card-form-label"> Sähköposti</label>
                <br />
                <Field name="email" type="email" />
              </div>
              <div className="input-group1">
                <label className="card-form-label">Puhelinnumero</label>
                <br />
                <Field name="phone" type="number" />
              </div>
              <div className="input-group1">
                <label className="card-form-label">
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

                <button type="submit" className="btn-red">
                  LÄHETÄ
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Feedback;
