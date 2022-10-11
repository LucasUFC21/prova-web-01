import './App.css';

//import Calculadora from './components/questao02/Calculadora';
import Questao01 from './components/questao01/Questao01';
import Questao01A from './components/questao01/Questao01A'
import Questao01B from './components/questao01/Questao01B'

//Questão01
function App() {
  return (
    <div className="App">
      <Questao01>
        <Questao01A nome="Lucas" sobrenome="Martins da Silva" curso="Redes de Computadores" />
        <Questao01B />
      </Questao01>
    </div>
  );
}

//Questão 02
/*function App() {
  return (
    <div className="App">
      <Calculadora />
    </div>
  );
}*/

export default App;
