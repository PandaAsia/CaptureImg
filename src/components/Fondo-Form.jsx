/* eslint-disable react/prop-types */
const FondoForm = ({ children }) => {
  return (
    <>
      <section className="bg-[#E64A19] py-4 px-4 md:w-7/12 md:px-10 md:drop-shadow-xl md:z-20 md:relative md:mb-[-2rem] lg:mb-0 lg:ml-[-4rem] lg:w-[450px]">
        {children};
      </section>
    </>
  );
};
export default FondoForm;
