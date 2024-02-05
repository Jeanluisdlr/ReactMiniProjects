import React from "react";
import "../stylesheets/submitform.css";
import { useState } from "react";

const SubmitForm = () => {
  const initialState = {
    username: "",
    FullName: "",
    Age: "",
  };

  const [inputValues, setInputValues] = useState(initialState);
  const [valuesSent, setValuesSent] = useState(inputValues);
  const [hide, setHide] = useState(true);

  const updateState = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const printValues = (e) => {
    e.preventDefault();
    setValuesSent({ ...inputValues });
    setInputValues(initialState);
    setHide(false);
  };

  return (
    <div className="form-wrapper">
      <form className="summit-form" onSubmit={printValues}>
        <label className="input-label">
          Username:
          <br />
          <input
            type="text"
            name="username"
            value={inputValues.username}
            onChange={updateState}
          />
        </label>
        <label className="input-label">
          FullName:
          <br />
          <input
            type="text"
            name="FullName"
            value={inputValues.FullName}
            onChange={updateState}
          />
        </label>
        <label className="input-label">
          Age:
          <br />
          <input
            type="number"
            name="Age"
            value={inputValues.Age}
            onChange={updateState}
          />
        </label>
        <input id="submit-button" type="submit" />
      </form>

      <div className="submitted-information-wrapper" hidden={hide}>
        <h2>Request Sent to DB with below request data:</h2>
        <ul>
          <li>Username: {valuesSent.username}</li>
          <li>FullName: {valuesSent.FullName}</li>
          <li>Age: {valuesSent.Age}</li>
        </ul>
      </div>
    </div>
  );
};

export default SubmitForm;
