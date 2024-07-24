import CardForm from "../components/CardForm";
import CardImg from "../components/CardImg";

const AnimeInfo = () => {
  return (
    <>
      <section className="h-screen w-full">
        <section className="h-full w-full flex flex-row py-2">
          <div className="flex-1 flex justify-center">
            <CardImg />
          </div>
          <CardForm />
        </section>
      </section>
    </>
  );
};
export default AnimeInfo;
