import CarpetFrom from "../components/CarpetForm";
import { ProviderIcon } from "../contexts/ContextIcom";
import CarpetImg from "../components/CarpetImg";

const AnimeCarpet = () => {
  return (
    <>
      <ProviderIcon>
        <section className="flex flex-col">
          <div className="flex-1">
            <CarpetImg />
          </div>
          <div className="flex-1">
            <CarpetFrom />
          </div>
        </section>
      </ProviderIcon>
    </>
  );
};
export default AnimeCarpet;
