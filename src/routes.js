// Início Aula-1
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";

import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "componentes/Container";
import FavoritosProvider from "contextos/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
