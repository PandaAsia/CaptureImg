import Image01Folder from "../components/Imagen-01-Folder";
import InfoForm from "../components/InfoForm";
import FondoImag from "../components/Fondo-Img";
import FondoForm from "../components/Fondo-Form";
import InputName from "../components/InputName";
import InputSelect from "../components/InputSelect";
import InputFile from "../components/InputFile";
import InputColor from "../components/InputColor";
import InputCheckbox from "../components/InputCheckbox";
import ButtonBack from "../components/ButtonBack";

const CarpertIcom = () => {
  return (
    <>
      <section className="w-full relative">
        <section className="flex flex-col-reverse md:items-center md:pt-12 lg:flex-row lg:pt-0 lg:justify-center">
          <FondoImag>
            <Image01Folder />
          </FondoImag>
          <FondoForm>
            <InfoForm>
              <InputName />
              <InputFile />
              <InputColor />
              <InputCheckbox />
              <InputSelect />
            </InfoForm>
          </FondoForm>
        </section>
        <ButtonBack />
      </section>
    </>
  );
};
export default CarpertIcom;
