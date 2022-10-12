import React from "react";

const Informacao = (props)=> {
    const {nome,sobrenome,curso} = props
    return (
        <div>
            Nome: {nome}<br />
            Sobrenome: {sobrenome}<br />
            Curso: {curso}<br />
        </div>
    )
}

export default Informacao