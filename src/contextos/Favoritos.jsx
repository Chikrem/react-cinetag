import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    // Obtém os valores do contexto FavoritosContext
    const { favorito, setFavorito } = useContext(FavoritosContext);
    
    // Função para adicionar ou remover um favorito
    function adicionarFavorito(novoFavorito) {
        // Verifica se o novo favorito já está na lista
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        
        // Cria uma nova lista baseada na lista atual de favoritos
        let novaLista = [...favorito];
        
        // Se o favorito não estiver repetido, adiciona à lista
        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista); // Atualiza o estado com a nova lista
        }
        
        // Se o favorito já estiver na lista, remove-o
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista); // Atualiza o estado com a nova lista
    }

    // Retorna os favoritos e a função para adicionar/remover favoritos
    return {
        favorito,
        adicionarFavorito
    }
}