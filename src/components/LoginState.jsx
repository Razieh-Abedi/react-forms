import { useState } from "react";

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  function handleUserInfoChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(userInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfoChange}
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
