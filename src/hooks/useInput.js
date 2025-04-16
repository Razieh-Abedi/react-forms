import { useState } from "react";

export function useInput(initialEnteredValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialEnteredValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    handleInputChange,
    handleInputBlur,
    value: enteredValue,
    hasError: didEdit && !valueIsValid,
  };
}
