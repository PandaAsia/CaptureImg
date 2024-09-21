import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import CarpertIcom from "./Page/CarpertIcon";
import EjemploIcon from "./Page/EjemploIcon";
import { ProviderIcon } from "./contexts/ContextIcom";
import Fooder from "./components/fooder";
import Page404 from "./Page/404";
import AnimeInfor from "./Page/AnimeInfo";

function App() {
  return (
    <>
      <HashRouter>
        <main className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <section className="w-full h-full md:flex md:justify-center">
            <ProviderIcon>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Opcion_1" element={<CarpertIcom />} />
                <Route path="/Opcion_2" element={<AnimeInfor />} />
                <Route path="/Opcion_5" element={<EjemploIcon />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </ProviderIcon>
          </section>
          <Fooder />
        </main>
      </HashRouter>
    </>
  );
}

export default App;
