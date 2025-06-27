// Final Curso
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Lazy load das páginas
const Inicio = lazy(() => import("pages/Inicio"));
const Favoritos = lazy(() => import("pages/Favoritos"));
const Player = lazy(() => import("pages/Player"));
const NaoEncontrada = lazy(() => import("pages/NaoEncontrada"));
const PaginaBase = lazy(() => import("pages/PaginaBase"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />}></Route>
            <Route path="favoritos" element={<Favoritos />}></Route>
            <Route path="videos/:id" element={<Player />}></Route>
            <Route path="*" element={<NaoEncontrada />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
