import { useContext } from "react";
import ContextIcom from "../contexts/ContextIcom";

const InputSelect = () => {
  const { form, handleForm } = useContext(ContextIcom);
  return (
    <>
      <select
        name="fileFormat"
        onChange={handleForm}
        value={form.fileFormat}
        className="rounded py-1 px-4 box-border select-none cursor-pointer font-bold text-sm hover:bg-[#c9c9c9] [&>option]:bg-[#FFCCBC] [&>option]:font-bold [&>option]:text-sm lg:[&>option]:text-xs lg:text-xs"
        required
      >
        <option value="">Select</option>
        <option value="jpeg">JPEG y JPG</option>
        <option value="png">PNG</option>
        <option value="webp">WebP</option>
        <option value="svg">Svg</option>
      </select>
    </>
  );
};
export default InputSelect;
