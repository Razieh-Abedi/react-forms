import { useRef, useState } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPAssword = passwordRef.current.value;
    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email"
            type="text"
            name="email"
            ref={emailRef}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
