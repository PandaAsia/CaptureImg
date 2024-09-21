/* eslint-disable react/prop-types */
const FondoForm = ({ children }) => {
  return (
    <>
      <section className="bg-[#E64A19] py-4 px-4 md:w-7/12 md:px-10 md:drop-shadow-[0_7px_5px_rgba(0,0,0,0.90)] md:z-20 md:relative md:mb-[-2rem] lg:mb-0 lg:mr-[-4rem] lg:w-[450px] lg:h-[450px] lg:flex lg:items-center lg:justify-center">
        {children}
      </section>
    </>
  );
};
export default FondoForm;
