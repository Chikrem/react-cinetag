import Banner from "componentes/Banner"
import Cabecalho from "componentes/Cabecalho"
import Rodape from "componentes/Rodape"

function Inicio (){
    return(
        <>
        <Cabecalho />
        <Banner imagem="home" />
        <Rodape />
        </>
    )
}

export default Inicio