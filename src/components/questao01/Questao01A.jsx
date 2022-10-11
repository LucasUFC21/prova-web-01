import React from "react";

const Informacao = (props)=> {
    const {nome,sobrenome,curso} = props
    return (
        <div>
            Nome: {nome}<br />
            Curso: {sobrenome}<br />
            Universidade: {curso}<br />
        </div>
    )
}

export default Informacao