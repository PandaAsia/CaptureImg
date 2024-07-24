import { useState } from "react";
import CarpetFrom from "../components/CarpetForm";

const AnimeCarpet = () => {
  const [dataImg, setDataImg] = useState("");
  const createImg = (data) => {};
  return (
    <>
      <section className="flex flex-col">
        <section className="flex-1"></section>
        <div className="flex-1">
          <CarpetFrom createImg={createImg} />
        </div>
      </section>
    </>
  );
};
export default AnimeCarpet;
