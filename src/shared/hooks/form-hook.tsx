import { useCallback, useReducer } from "react";

type ActionType = {
  type: string;
  value?: string;
  isValid?: boolean;
  inputId?: string;
  inputs?: InputType;
  formIsValid?: boolean;
};

type InputType = {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
};

type StateType = {
  inputs: InputType;
  isValid: boolean;
};

const formReducer = (state: StateType, action: ActionType) => {
  let formIsValid = true;
  switch (action.type) {
    case "INPUT_CHANGE":
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid!;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId!]: { value: action.value!, isValid: action.isValid! },
        },
        isValid: formIsValid,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs!,
        isValid: action.formIsValid!,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: InputType,
  initialFormValidity: boolean
): [
  StateType,
  (id: string, value: string, isValid: boolean) => void,
  (inputData: InputType, formValidity: boolean) => void
] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    []
  );

  const setFormData = useCallback(
    (inputData: InputType, formValidity: boolean) => {
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    []
  );

  return [formState, inputHandler, setFormData];
};
