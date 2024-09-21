import ButtonBack from "./ButtonBack";

/* eslint-disable react/prop-types */
const Fondo = ({ children }) => {
  return (
    <>
      <section className="w-full relative">
        <section className="flex flex-col-reverse md:items-center md:pt-12 lg:flex-row-reverse lg:pt-0 lg:justify-center">
          {children}
        </section>
        <ButtonBack />
      </section>
    </>
  );
};
export default Fondo;
