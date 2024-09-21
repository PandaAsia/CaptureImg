import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputFile = () => {
  const { handleForm } = useContext(ContextIcom);
  return (
    <>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .webp"
        name="fileImage"
        onChange={handleForm}
        className="font-bold text-[#FFCCBC] select-none cursor-pointer file:border-0 file:py-2 file:px-4 file:rounded file:text-sm file:bg-[#212121] file:text-[#E64A19] hover:file:bg-violet-100 file:cursor-pointer file:transition file:ease-in-out file:lg:text-xs lg:text-xs lg:file:py-1"
        required
      />
    </>
  );
};
export default InputFile;
