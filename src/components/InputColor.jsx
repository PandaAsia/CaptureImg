import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputColor = () => {
  const { form, handleForm } = useContext(ContextIcom);
  return (
    <>
      <div className="flex flex-row items-center">
        <label
          htmlFor="fileColor"
          className="pr-4 text-[#FFCCBC] font-bold select-none cursor-pointer"
        >
          Selecciona el color:
        </label>
        <input
          type="color"
          name="fileColor"
          id="fileColor"
          onChange={handleForm}
          value={form.fileColor}
          className="cursor-pointer rounded-full px-2 py-[0.1rem] border-none w-40 h-10 bg-[#757575] hover:bg-[#212121] transition ease-in-out"
        />
      </div>
    </>
  );
};
export default InputColor;
