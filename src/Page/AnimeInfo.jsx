import { useContext } from "react";
import Fondo from "../components/Fondo";
import FondoForm from "../components/Fondo-Form";
import FondoImag from "../components/Fondo-Img";
import InfoForm from "../components/InfoForm";
import InputFile from "../components/InputFile";
import InputInfo from "../components/InputInfo";
import InputName from "../components/InputName";
import InputSelect from "../components/InputSelect";
import ContextIcom from "../contexts/ContextIcom";
import InputDoble from "../components/InputDoble";
import Image02Folder from "../components/Imagen-02-Folder";
import InputSelectState from "../components/InputSelectState";
import InputSinopsis from "../components/InputSinopsis";
import InputCheckbox from "../components/InputCheckbox";

const AnimeInfor = () => {
  const { form } = useContext(ContextIcom);
  return (
    <>
      <Fondo>
        <FondoImag>
          <Image02Folder />
        </FondoImag>
        <FondoForm>
          <InfoForm>
            <InputName />
            <InputDoble>
              <InputInfo
                type={`number`}
                placeholder={`Episodios`}
                name={`fileEpisode`}
                value={form.fileEpisode}
              />
              <InputInfo
                type={`number`}
                placeholder={`Año`}
                name={`fileYear`}
                value={form.fileYear}
              />
            </InputDoble>
            <InputDoble>
              <InputSelectState />
              <InputInfo
                type={`text`}
                placeholder={`Studio`}
                name={`fileStudio`}
                value={form.fileStudio}
              />
            </InputDoble>

            <InputDoble>
              <InputInfo
                type={`text`}
                placeholder={`Genero`}
                name={`fileGender`}
                value={form.fileGender}
              />
              <InputInfo
                type={`number`}
                placeholder={`Puntaje`}
                name={`filePoint`}
                value={form.filePoint}
                active={form.fileView}
              />
            </InputDoble>
            <InputSinopsis />
            <InputFile />
            <InputCheckbox text={"Mostrar Puntuación"} />
            <InputSelect />
          </InfoForm>
        </FondoForm>
      </Fondo>
    </>
  );
};
export default AnimeInfor;
