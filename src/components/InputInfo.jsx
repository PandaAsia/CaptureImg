import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

/* eslint-disable react/prop-types */
const InputInfo = ({ type, placeholder, name, value, active = true }) => {
  const { handleForm } = useContext(ContextIcom);
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleForm}
        value={value}
        className="rounded py-2 px-4 box-border focus:caret-indigo-500 font-bold text-sm lg:text-xs lg:py-1 lg:px-2 lg:w-full"
        required={active}
        disabled={!active}
        step="0.01"
      />
    </>
  );
};
export default InputInfo;
