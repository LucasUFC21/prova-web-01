import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Calculadora = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resul, setResul] = useState(0);
    
    const somar  = () => {
        setResul(parseFloat(num1) + parseFloat(num2));
    }

    const subtra  = () => {
        setResul(parseFloat(num1) - parseFloat(num2));
    }

    const multi  = () => {
        setResul(parseFloat(num1) * parseFloat(num2));
    }

    const dividir  = () => {
        setResul(parseFloat(num1) / parseFloat(num2));
    }

    return (
        <div>
            <h1> Calculadora </h1>
            <div>
            <input 
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)} />

            <input 
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)} />
            </div>

            <div>
            <button className="btn btn-primary" onClick={somar}>+</button>
            <span style={{paddingLeft:20}}/>
            <button className="btn btn-primary" onClick={subtra}>-</button>
            <span style={{paddingLeft:20}}/>
            <button className="btn btn-primary" onClick={multi}>*</button>
            <span style={{paddingLeft:20}}/>
            <button className="btn btn-primary" onClick={dividir}>/</button>            
            </div>

            <label> Resultado: {resul} </label>
        </div>
    )
}

export default Calculadora