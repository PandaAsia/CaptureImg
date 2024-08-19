/* eslint-disable react/prop-types */
import { useContext } from "react";
import img02 from "../assets/img-not-fount.webp";
import ContextIcom from "../contexts/ContextIcom";
import { idCapture } from "../constants/constants.js";

const Image01Folder = () => {
  const { form } = useContext(ContextIcom);
  const { fileName, fileColor, fileView, fileImage, fileFormat } = form;

  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
        <div
          className={`w-[324px] h-[512px] relative border-none ${
            fileFormat === "jpeg" ? "bg-white" : null
          }`}
          id={`${idCapture}`}
        >
          <div className="bg-slate-950 w-[281.5px] h-[497.5px] absolute top-0 bottom-0 right-0 left-0 m-auto img-fondo01 border-none"></div>
          <div className="absolute w-[35px] h-[480px] img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto border-none">
            <div className="w-full h-full origin-right img-etiqueta01 img-etiqueta-background border-none"></div>
          </div>
          <div className="absolute w-[35px] h-[480px] img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto border-none">
            <div
              className={`w-full h-full origin-right img-etiqueta01 opacity-50 border-none`}
              style={{
                background: fileColor,
              }}
            ></div>
          </div>
          <div className="absolute w-[35px] h-[480px] img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto border-none">
            <div className="w-auto h-full origin-right img-etiqueta01 flex items-center justify-center relative border-none">
              <span className="absolute whitespace-nowrap rotate-90 font-bold text-2xl text-white border-none">
                {fileName ? fileName : "Nombre"}
              </span>
            </div>
          </div>
          <div className="w-[258px] h-[481.5px] ChangePertive left-16 top-0 bottom-0 my-auto border-none">
            <img
              src={fileImage ? URL.createObjectURL(fileImage) : img02}
              alt="la informacion aun no esta definido"
              className="w-full h-full object-cover origin-left ChangePertiveImg border-none"
            />
          </div>
          {fileView && (
            <div className="w-[258px] h-[481.5px] ChangePertive left-16 top-0 bottom-0 my-auto border-none">
              <div className="w-[80px] h-[80px] bg-white border-4 border-red-600 rounded-full flex items-center justify-center ChangePertiveImg bottom-6 left-4">
                <span className="text-red-600 text-4xl font-bold">18+</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Image01Folder;
