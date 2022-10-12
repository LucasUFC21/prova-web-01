import axios from "axios"
import { useEffect, useState } from "react"

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
            <ul>
                <li>
                    <h3> Pais com a Maior População em Habitantes</h3>
                    {quantidadePopulacao}
                </li>
                <li>
                    <h3> Nome do País</h3>
                    {nomepais}
                </li>
            </ul>
        )
    }

    return (
        <div>
            {PaisMaiosPopuloso()}
        </div>

    )

}

export default Questao04;