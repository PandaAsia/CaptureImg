import { useState } from "react";

const initialForm = {
  fileName: "",
  ImgIcon: "",
};
const CarpetFrom = ({ createImg }) => {
  const [form, setFrom] = useState(initialForm);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fileName || !form.ImgIcon) {
      alert("Los Datos estan Vacio");
    }
    const dataFile = form.ImgIcon.lastIndexOf(".") + 1;
    console.log(form.ImgIcon);

    //  function validateFileType() {
    //    var fileName = document.getElementById("fileName").value;
    //    var idxDot = fileName.lastIndexOf(".") + 1;
    //    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    //    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
    //      //TO DO
    //    } else {
    //      alert("Only jpg/jpeg and png files are allowed!");
    //    }
    //  }

    //createImg(form);
    handleReset();
  };
  const handlechange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFrom(initialForm);
  };
  return (
    <>
      <section className="flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre del Archivo"
            name="fileName"
            className="border-2 border-slate-950"
            value={form.fileName}
            onChange={handlechange}
          />
          <input
            type="file"
            name="ImgIcon"
            id="ImgIcon"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={handlechange}
            value={form.ImgIcon}
          />
          <input
            type="submit"
            value="Guardar Archivo"
            className="border-2 border-slate-950 py-2 px-4"
          />
        </form>
      </section>
    </>
  );
};
export default CarpetFrom;
