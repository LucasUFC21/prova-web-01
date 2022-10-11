import React from "react"

const Disciplina = ()=> {

    let disciplinas = ['Desenvolvimento web', 'Gerencia de Projetos', 'GTIC', 'Projeto Integrado', 'Analise de Desempenho']

    const listarDisciplinas = () => {
        return disciplinas.map(
            (Element, disciplina) => {
                return(
                    <h4> {Element} </h4>
                )
            }
        )
    }

    return(
        <div>
            <h2> Listas de Disciplinas Ativas: </h2>
                {listarDisciplinas()}
        </div>
    )
}

export default Disciplina