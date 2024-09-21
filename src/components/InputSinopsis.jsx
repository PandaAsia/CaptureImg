import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputSinopsis = () => {
  const { form, handleForm } = useContext(ContextIcom);
  return (
    <>
      <textarea
        className="resize-none w-full h-20 rounded py-2 px-4 box-border focus:caret-indigo-500 font-bold text-sm lg:text-xs lg:py-1 lg:px-2"
        name="fileSinopsis"
        onChange={handleForm}
        value={form.fileSinopsis}
        maxLength={900}
        placeholder="Sinopsis"
      ></textarea>
    </>
  );
};
export default InputSinopsis;
