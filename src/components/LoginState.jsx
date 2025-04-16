import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function LoginState() {
  const {
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    value: emailValue,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    value: passwordValue,
    hasError: passwordHasError,
  } = useInput("", (value) => isNotEmpty(value) && hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError && passwordHasError) {
      return;
    }

    ////send data to BE
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
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={
            passwordHasError &&
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
