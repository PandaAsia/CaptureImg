import Image01Folder from "../components/Imagen-01-Folder";
import InfoForm from "../components/InfoForm";
import FondoImag from "../components/Fondo-Img";
import FondoForm from "../components/Fondo-Form";
import InputName from "../components/InputName";
import InputSelect from "../components/InputSelect";
import InputFile from "../components/InputFile";
import InputColor from "../components/InputColor";
import InputCheckbox from "../components/InputCheckbox";
import Fondo from "../components/Fondo";

const CarpertIcom = () => {
  return (
    <>
      <Fondo>
        <FondoImag>
          <Image01Folder />
        </FondoImag>
        <FondoForm>
          <InfoForm>
            <InputName />
            <InputFile />
            <InputColor />
            <InputCheckbox text={"Mostrar el sticker oculto"} />
            <InputSelect />
          </InfoForm>
        </FondoForm>
      </Fondo>
    </>
  );
};
export default CarpertIcom;
