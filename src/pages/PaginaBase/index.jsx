import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { VideosProvider } from "contextos/Videos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <VideosProvider>
            <main>
                <Cabecalho />
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
                <Rodape />
            </main>
        </VideosProvider>
    );
}

export default PaginaBase;