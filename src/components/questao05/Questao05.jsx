import axios from "axios"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Questao05 = () => {

  const [paises, setPaises] = useState([])
  const [continente, setContinente] = useState('africa')

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
      .then(
        (response) => {
          setPaises(response.data)
        }
      ).catch(
        (err) => {
          console.log(err)
        }
      )
  }, [continente]
  )

  const PaisMaiosPopuloso = () => {

    let MaiorPopulacao = 0
    let Maiorpais = ' '
    paises.forEach((pais) => {
      if (pais.population > MaiorPopulacao) {
        MaiorPopulacao = pais.population
        Maiorpais = pais.name
      }
    })
    return (
      <tr>
        <td>{Maiorpais}</td>
        <td>{MaiorPopulacao}</td>
      </tr >
    )
  }

  const PaisMenosPopuloso = () => {

    let MenorPopulacao = 0
    let Menorpais = ' '
    paises.forEach((pais, index) => {
      if (index === 0) {
        MenorPopulacao = pais.population
        Menorpais = pais.name
      }
      else if (pais.population < MenorPopulacao) {
        MenorPopulacao = pais.population
        Menorpais = pais.name
      }
    })
  
    return (
      <tr>
        <td>{Menorpais}</td>
        <td>{MenorPopulacao}</td>
      </tr >
    )
  }

  const botaoContinente = () => {
    if (continente === 'americas') {
      return PaisMaiosPopuloso()
    } else {
      return PaisMenosPopuloso()
    }
  }

  const TabelaPais = () => {
    if (continente === "asia") {
      return "País menos populoso da Asia"
    }
   else if (continente === "americas") {
      return "País mais populoso das Americas"
    }
    return "País menos populoso da Africa"
  }

  return (
    <div>
      <table className="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th colSpan={2} >{TabelaPais()}</th>
          </tr>
          <tr>
            <th>País</th>
            <th>População</th>
          </tr>
        </thead>
        <tbody>
          {botaoContinente()}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => setContinente("americas")}>Americas</button>
      <span style={{paddingLeft:20}}/>
      <button className="btn btn-warning" onClick={() => setContinente("asia")}>Asia</button>
    </div>
  )

}

export default Questao05