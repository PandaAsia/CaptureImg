import ButtonMenu from "../components/ButtonMenu";

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 md:absolute md:top-4">
        <h1 className="text-2xl font-bold text-[#FFCCBC] py-4 md:py-16">
          Diseñador de Carpetas
        </h1>
        <section className="grid grid-cols-2 gap-x-4 gap-y-8 w-full h-full [&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a]:justify-center [&>a]:border-4 [&>a]:border-[#E64A19] [&>a]:w-28 [&>a]:h-28 [&>a]:rounded-md [&>a]:m-auto [&>a]:text-[#FFCCBC] md:grid-cols-3 md:gap-16 lg:grid-cols-5 lg:gap-x-16 lg:gap-y-8">
          <ButtonMenu name={"Opcion_1"} />
        </section>
      </section>
    </>
  );
};
export default Home;
