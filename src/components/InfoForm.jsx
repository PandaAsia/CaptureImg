import { useContext, useEffect } from "react";
import ContextIcom from "../contexts/ContextIcom";

/* eslint-disable react/prop-types */
const InfoForm = ({ children }) => {
  const { handleSumbit, handleReset } = useContext(ContextIcom);

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, []);
  return (
    <>
      <div className="w-full h-auto">
        <header className="w-full h-auto pb-5">
          <h1 className="text-4xl font-bold text-[#FFCCBC] text-center lg:text-2xl">
            Creacion de Icon
          </h1>
        </header>
        <form className="flex flex-col gap-6 lg:gap-2" onSubmit={handleSumbit}>
          {children}
          <div className="flex flex-row gap-6 pt-4">
            <input
              type="submit"
              value="Descargar"
              className="bg-[#FFCCBC] text-[#212121] outline outline-offset-0  outline-[#FFCCBC] font-bold rounded py-1 px-2 cursor-pointer flex-1 hover:bg-[#212121] hover:text-[#FFCCBC] hover:outline-[#212121] transition ease-in-out lg:text-xs"
            />
            <input
              type="reset"
              value="Limpiar"
              onClick={handleReset}
              className="text-[#FFCCBC] outline outline-offset-0 outline-[#212121] font-bold rounded py-1 px-2 cursor-pointer flex-1 hover:text-[#212121] hover:outline-[#FFCCBC] transition ease-in-out lg:text-xs"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default InfoForm;
//radial-gradient(at right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))
