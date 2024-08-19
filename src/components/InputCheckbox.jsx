import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputCheckbox = () => {
  const { form, handleForm } = useContext(ContextIcom);
  return (
    <>
      <div className=" flex flex-row items-center">
        <input
          type="checkbox"
          name="fileView"
          id="fileView"
          onChange={handleForm}
          value={form.fileView}
          className="appearance-none w-5 h-5 rounded-full bg-[#212121] cursor-pointer inline-block relative checked:bg-[#FFCCBC] checked:border-4 checked:border-[#212121] hover:bg-[#FFCCBC] hover:checked:bg-[#e61919]"
        />
        <label
          className="text-[#FFCCBC] font-bold px-2 select-none cursor-pointer"
          htmlFor="fileView"
        >
          Mostrar el sticker oculto
        </label>
      </div>
    </>
  );
};
export default InputCheckbox;
