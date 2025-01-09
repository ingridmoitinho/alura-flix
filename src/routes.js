import Inicio from "./pages/Inicio/index";
import PaginaBase from "./pages/PaginaBase/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "./pages/NaoEncontrada";
import NovoVideo from "./pages/NovoVideo";
import Player from "./pages/Player";
import { VideoProvider } from "./context/VideoContext";

function AppRoutes() {
  return (
    <BrowserRouter>
      <VideoProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />} />
            <Route path="cadastro" element={<NovoVideo />} />
            <Route path=":id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Route>
        </Routes>
      </VideoProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
