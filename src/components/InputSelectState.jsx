import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputSelectState = () => {
  const { form, handleForm } = useContext(ContextIcom);
  return (
    <>
      <select
        name="fileTipo"
        onChange={handleForm}
        value={form.fileTipo}
        className="rounded py-1 px-4 box-border select-none cursor-pointer font-bold text-sm hover:bg-[#c9c9c9] [&>option]:bg-[#FFCCBC] [&>option]:font-bold [&>option]:text-sm lg:[&>option]:text-xs lg:text-xs lg:w-full lg:px-2"
        required
      >
        <option value="">Tipo</option>
        <option value="Serie">Serie</option>
        <option value="Movie">Movie</option>
        <option value="Ovas">Ovas</option>
        <option value="Onas">Onas</option>
        <option value="Especial">Especial</option>
      </select>
    </>
  );
};
export default InputSelectState;
