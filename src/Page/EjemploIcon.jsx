import { useState } from "react";
//import html2canvas from "html2canvas";
import img02 from "../assets/img-not-fount.webp";
import domtoimage from "dom-to-image-more";

const EjemploIcon = () => {
  const [nameFile, setNameFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  const handleChangeImg = (e) => {
    const File = e.target.files[0];
    const render = new FileReader();
    render.onloadend = () => {
      setImgFile(render.result);
    };
    render.readAsDataURL(File);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameFile && imgFile) {
      handleScreenShot();
    } else {
      alert("Los datos estan Vacios");
    }
  };

  const handleScreenShot = () => {
    const containerCapture = document.querySelector("#ScreemShop");
    if (!containerCapture) return alert("No hay Datos");
    

    // const clone = containerCapture.cloneNode(true);
    // clone.querySelectorAll('*').forEach(element => {
    //   element.style.border = 'none';
    // });

    // document.body.appendChild(clone);
    // containerCapture.querySelectorAll('*').forEach(element => {
    //   element.style.border = 'none';
    // })

    domtoimage.toPng(containerCapture, {
      style: {
        border: "none"
    }}).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = `${nameFile}.png`;
      link.href = dataUrl;
      link.click();

    }).catch((err) => {
        console.log("Nosotros no podemos tomar una foto por el momento" + err);
    });
    
  };
  return (
    <>
      <section className="flex flex-row ">
        <section className="bg-slate-600 flex items-center justify-center">
        <div className="w-[324px] h-[512px] relative border-none" id="ScreemShop">
          <div className="bg-slate-950 w-[281.5px] h-[497.5px] absolute border-none top-0 bottom-0 right-0 left-0 m-auto img-fondo01"></div>
          <div className="absolute w-[35px] h-[480px] border-none img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto">
            <div className="w-full h-full border-none origin-right img-etiqueta01 img-etiqueta-background"></div>
          </div>
          <div className="absolute w-[35px] h-[480px] border-none img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto">
            <div
              className={`w-full h-full origin-right img-etiqueta01 opacity-50 bg-black`}
            ></div>
          </div>
          <div className="absolute w-[35px] h-[480px] img-etiqueta-container left-[1.35rem] bottom-0 top-0 my-auto">
            <div className="w-auto h-full origin-right img-etiqueta01 flex items-center justify-center relative">
              <span className="absolute whitespace-nowrap rotate-90 font-bold text-2xl text-white">
                {nameFile ? nameFile : "Nombre"}
              </span>
            </div>
          </div>
          <div className="w-[258px] h-[481.5px] ChangePertive left-16 top-0 bottom-0 my-auto border-0">
            <img
              src={imgFile ? imgFile : img02}
              alt="la informacion aun no esta definido"
              className="w-full h-full object-cover origin-left ChangePertiveImg border-0"
            />
          </div>
            <div className="w-[258px] h-[481.5px] ChangePertive left-16 top-0 bottom-0 my-auto">
              <div className="w-[80px] h-[80px] bg-white border-4 border-red-600 rounded-full flex items-center justify-center ChangePertiveImg bottom-6 left-4">
                <span className="text-red-600 text-4xl font-bold">18+</span>
              </div>
            </div>
        </div>
        </section>
        <div className="flex-1 h-full w-full">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              onChange={(e) => setNameFile(e.target.value)}
              name="FileName"
            />
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={handleChangeImg}
              name="FileImg"
            />
            <input type="submit" value="Descargar" />
          </form>
        </div>
      </section>
    </>
  );
};
export default EjemploIcon;
