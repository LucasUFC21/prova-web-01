import React from "react"

const Disciplina = () => {

    let disciplinas = ['Desenvolvimento web', 'Gerencia de Projetos', 'GTIC', 'Projeto Integrado', 'Analise de Desempenho']

    const listarDisciplinas = () => {
        return disciplinas.map(
            (Element) => {
                return (
                    <h4> {Element} </h4>
                )
            }
        )
    }

    return (
        <div>
            <h2> Lista de Disciplinas Ativas: </h2>
            {listarDisciplinas()}
        </div>
    )
}

export default Disciplina