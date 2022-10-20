import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

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

    const TabelaPokemon = () => {
        return resultPokemon.map(
            (element, index) => {
                element.key = index
                return (
                    <tr>
                        <td> {element.name} </td>
                        <td> {element.url} </td>
                    </tr>
                )
            }
        )
      }

      return (
        <div>
      <table className="table">
      <thead class="thead-dark">
          <tr>
              <th scope="col">Nome</th>
              <th scope="col">Url</th>
          </tr>
      </thead>
      <tbody>
          {TabelaPokemon()}
      </tbody>
  </table>
  <button className='btn btn-danger' onClick={() => setOffset(init => init + 10)}>
        Proximos 10 Pokemon
      </button>
    </div>
      )
}

export default ListPokemon