import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputName = () => {
  const { form, handleForm } = useContext(ContextIcom);

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        name="fileName"
        onChange={handleForm}
        value={form.fileName}
        className="rounded py-2 px-4 box-border focus:caret-indigo-500 font-bold text-sm lg:text-xs lg:py-1"
        maxLength={32}
        required
      />
    </>
  );
};

export default InputName;
