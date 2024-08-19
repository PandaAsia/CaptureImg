/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { FileInit, idCapture } from "../constants/constants.js";
import {
  CaptureJpg,
  CaptureWebp,
  CapturePng,
  CaptureSvg,
} from "../logic/Logic.js";

const ContextIcom = createContext();

const ProviderIcon = ({ children }) => {
  const [form, setForm] = useState(FileInit);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (form.fileName && form.fileImage && form.fileFormat) {
      handleCaptureImage(idCapture);
      console.log("se Guardo");
    } else {
      alert("Hay datos Vacio");
    }
  };

  const handleForm = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (name === "fileName") {
      const letra = value;
      setForm({ ...form, [name]: letra.toUpperCase() });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCaptureImage = (idCap) => {
    const containerCapture = document.querySelector(`#${idCap}`);
    if (!containerCapture) return alert("No hay Datos");
    if (!form.fileFormat) return alert("No hay formato");
    switch (form.fileFormat) {
      case "jpeg":
        CaptureJpg(containerCapture, form);
        break;
      case "webp":
        CaptureWebp(containerCapture, form);
        break;
      case "svg":
        CaptureSvg(containerCapture, form);
        break;
      default:
        CapturePng(containerCapture, form);
        break;
    }
  };

  const handleReset = () => {
    setForm(FileInit);
  };

  const data = { form, setForm, handleSumbit, handleForm, handleReset };
  return <ContextIcom.Provider value={data}>{children}</ContextIcom.Provider>;
};

export { ProviderIcon };
export default ContextIcom;
