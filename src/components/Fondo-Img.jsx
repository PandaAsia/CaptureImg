/* eslint-disable react/prop-types */
const FondoImag = ({ children }) => {
  return (
    <>
      <section className="bg-white w-full h-[600px] md:w-9/12 md:drop-shadow-lg md:z-10 lg:w-[600px]  lg:h-[512px]">
        {children}
      </section>
    </>
  );
};
export default FondoImag;
