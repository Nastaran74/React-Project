import "./App.css";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChanges = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChanges = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailChanges = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmitted = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmitted}>
        {submitted && valid ? (
          <div className="success-message">
            Success! tahnk you for registration
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChanges}
          value={values.firstName}
          className="form-field"
          name="first name"
          placeholder="First Name"
        />
        {submitted && !values.firstName ? (
          <span className="failed-messages">Please Enter a First Name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChanges}
          value={values.lastName}
          className="form-field"
          name="last name"
          placeholder="Last Name"
        />
        {submitted && !values.lastName ? (
          <span className="failed-messages">Please Enter a Last Name</span>
        ) : null}
        <input
          onChange={handleEmailChanges}
          className="form-field"
          name="e-mail"
          placeholder="E-mail"
        />
        {submitted && !values.email ? (
          <span className="failed-messages">Please Enter E-mail Address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
