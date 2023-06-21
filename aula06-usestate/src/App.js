import './App.css';
import Introducao from './components/Introducao.js';
import Boxexemplo from './components/Boxexemplo';
import ExemploUm from './components/Exemplos/ExemploUm';
import ExemploDois from './components/Exemplos/ExemploDois';
import ExemploTres from './components/Exemplos/ExemploTres';

function App() {
  return (
    <div className="App">
      <Introducao/>
      <Boxexemplo desc="Exemplo 01 -> O nome abaixo é passado como um elemento utilizando o useState()"/>
      <ExemploUm/>
      
      <Boxexemplo desc="Exemplo 02 -> Altera o estado do elemento number de acordo com a interação dos botões"/>
      <ExemploDois/>

      <Boxexemplo desc="Exemplo 03 -> Cadastro de Informações"/>
      <ExemploTres/>
    </div>
  );
}

export default App;
 