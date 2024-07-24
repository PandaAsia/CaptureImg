import Imagen from "./../assets/120543446_p5.jpg";

const CardImg = () => {
  return (
    <>
      <section className="w-3/6 h-auto border-2 border-slate-950 flex flex-col justify-between bg-green-900">
        <header className="w-full h-4/6">
          <img
            className=" w-full h-full object-cover"
            src={Imagen}
            alt="Imagen Anime"
          />
        </header>
        <aside className="text-white relative">
          <strong className="absolute text-3xl top-[-3.5rem] text-border">
            Name Principal
          </strong>
          <ul className="px-2">
            <li>
              <span>Genero: </span> Generos
            </li>
            <li>
              <span>Años: </span> 2023
            </li>
            <li>
              <span>Episodios: </span> 12
            </li>
            <li>
              <span>Temporadas: </span> 1Temp
            </li>
            <li>
              <span>Estado: </span>Imcompleto
            </li>
          </ul>
          <span className="absolute right-1 bottom-0 text-7xl font-bold">
            7.5
          </span>
        </aside>
        <footer className="bg-white text-center">
          <span className="text-xs font-bold">Proxima Temp</span>
        </footer>
      </section>
    </>
  );
};
export default CardImg;
