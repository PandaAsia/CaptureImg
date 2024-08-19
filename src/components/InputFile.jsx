import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputFile = () => {
  const { handleForm } = useContext(ContextIcom);
  return (
    <>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        name="fileImage"
        onChange={handleForm}
        className="font-bold text-[#FFCCBC] select-none cursor-pointer file:border-0 file:py-2 file:px-4 file:rounded-full file:text-sm file:bg-[#212121] file:text-[#E64A19] hover:file:bg-violet-100 file:cursor-pointer file:transition file:ease-in-out"
        required
      />
    </>
  );
};
export default InputFile;
