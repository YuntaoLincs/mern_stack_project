import { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";

import "./Input.css";

import { type ValidatorTypes } from "../../util/validators";

type InputTypes = {
  id: string;
  element: string;
  type?: string;
  label: string;
  validators: ValidatorTypes[];
  onInput: (id: string, value: string, isValid: boolean) => void;
  placeholder?: string;
  rows?: number;
  value?: string;
  valid?: boolean;
  errorText: string;
};

type EventTypes = {
  target: {
    value: string;
  };
};

const Input = (props: InputTypes) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isTouched: false,
    isValid: props.valid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event: EventTypes) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
      val: "",
      validators: [],
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export type InputStateType = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
};

export type InputActionType = {
  type: string;
  val: string;
  validators: ValidatorTypes[];
};

const inputReducer = (state: InputStateType, action: InputActionType) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

export default Input;
