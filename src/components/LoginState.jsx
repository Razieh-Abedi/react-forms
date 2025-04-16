import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function LoginState() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid =
    didEdit.email && (!isNotEmpty(userInfo.email) || !isEmail(userInfo.email));

  const passwordIsInvalid =
    didEdit.password &&
    (!isNotEmpty(userInfo.password) || !hasMinLength(userInfo.password, 6));

  function handleUserInfoChange(event) {
    const { name, value } = event.target;

    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [name]: false }));
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [identifier]: true }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleUserInfoChange}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleUserInfoChange}
          onBlur={() => handleInputBlur("password")}
          error={
            passwordIsInvalid &&
            "Please enter a password of more than 6 characters"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
