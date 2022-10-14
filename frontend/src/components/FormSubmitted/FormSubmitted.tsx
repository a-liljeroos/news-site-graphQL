import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FormSubmitted.scss";

interface FormSubmittedProps {
  countDownSeconds: number;
  message: string;
}

const FormSubmitted = ({ countDownSeconds, message }: FormSubmittedProps) => {
  const [counter, setCounter] = useState(countDownSeconds);

  const countDown = (input: number) => {
    var newNumber = input - 1;
    var x = setInterval(() => {
      setCounter(newNumber);
      clearInterval(x);
      if (newNumber > 0) {
        countDown(newNumber);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown(counter);
  }, []);

  return (
    <div className="form-sub">
      <div className="form-sub-box">
        <h3>{message}</h3>
        <div className="form-submit-count">{counter}</div>
        <p>
          Sinut ohjataan takaisin{" "}
          <Link to={"/news-site-template"}>etusivulle...</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default FormSubmitted;
