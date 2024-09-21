import { useContext } from "react";
import img02 from "../assets/img-not-fount.webp";
import { idCapture } from "../constants/constants.js";
import ContextIcom from "../contexts/ContextIcom.jsx";
const Image02Folder = () => {
  const { form } = useContext(ContextIcom);
  const {
    fileName,
    fileImage,
    filePoint,
    fileEpisode,
    fileYear,
    fileStudio,
    fileTipo,
    fileSinopsis,
    fileGender,
    fileView,
  } = form;
  return (
    <>
      <section className="w-full h-full px-1 py-2 md:px-4 md:pt-5 lg:px-2 lg:pl-[4.5rem] lg:pt-2">
        <div className="bg-[#29422F] w-full h-auto border-none" id={idCapture}>
          <div className="w-full border-none relative">
            <img
              src={fileImage ? URL.createObjectURL(fileImage) : img02}
              alt=""
              className="w-full max-h-[500px] object-cover border-none"
            />
            <div className="w-full h-full bg-gradient-to-t from-[#29422F] absolute top-0 border-none"></div>
            {fileView && (
              <p className="absolute text-white text-8xl font-bold bottom-0 right-2 border-none">
                {filePoint ? filePoint : "0.0"}
              </p>
            )}
          </div>
          <div className="text-white p-4 font-bold border-none">
            <p className="text-4xl inline-block w-full h-auto border-none">
              {fileName ? fileName : "Name Anime"}
            </p>
            <div className="flex justify-between py-3 border-none">
              <p className="border-none">
                Caps:{` ${fileEpisode ? fileEpisode : "--"}`}
              </p>
              <div className="border-r-2"></div>
              <p className="border-none">{fileYear ? fileYear : "Año"}</p>
              <div className="border-r-2"></div>
              <p className="border-none">{fileTipo ? fileTipo : "Tipo"}</p>
              <div className="border-r-2"></div>
              <p className="border-none">
                {fileStudio ? fileStudio : "Studio"}
              </p>
            </div>
            <p className="border-none">
              Géneros: {fileGender ? fileGender : "--"}
            </p>
            <div className="border-b-2 mb-3 mt-1"></div>
            <p className="font-normal leading-5 tracking-tight border-none">
              {fileSinopsis ? fileSinopsis : "Sipnopsis"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Image02Folder;
