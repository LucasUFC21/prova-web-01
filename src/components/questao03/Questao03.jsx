import { useEffect, useState } from "react";
import axios from "axios";

function ListPokemon () {

    const [resultPokemon, setResultPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {

        try {
            async function getAllResults() {
                const retorno = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
                setResultPokemon(retorno.data.results)
            }
            getAllResults()
        } 
        catch (error) {
            console.log(error)
        }
    }, 
    [offset])

    return (
        <div>
            <button onClick={() => setOffset(prev => prev + 10)}>
                Procurar os proximos 10 pokemons
            </button>
            <ul>
                {resultPokemon.map(pokemon => (
                    <li>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListPokemon