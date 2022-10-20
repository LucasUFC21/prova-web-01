import axios from "axios"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Questao04 = () => {

    const [pais, setpais] = useState([])

    useEffect(
        () => {
            axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
                .then(
                    (response) => {
                        setpais(response.data)
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                    }
                )
        }, []
    )


    const PaisMaiosPopuloso = () => {

        let quantidadePopulacao = 0
        let nomepais = ' '
        pais.forEach((PaisA) => {
            if (PaisA.population > quantidadePopulacao) {
                quantidadePopulacao = PaisA.population
                nomepais = PaisA.name
            }
        })
        return (
            <tr>
                <td>{nomepais}</td>
                <td>{quantidadePopulacao}</td>
            </tr >
        )
    }

    return (
        <div>
            <table className="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Pais da Africa</th>
                        <th scope="col">Populacao Total</th>
                    </tr>
                </thead>
                <tbody>
                    {PaisMaiosPopuloso()}
                </tbody>
            </table>
        </div>
    )

}

export default Questao04;