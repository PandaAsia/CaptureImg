import ButtonBack from "../components/ButtonBack";

const Page404 = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4">
        <div className="[&>span]:text-[#E64A19] [&>span]:font-bold [&>span]:text-9xl">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <span className="text-white font-bold text-3xl">Not Fount</span>
        <ButtonBack />
      </section>
    </>
  );
};
export default Page404;
