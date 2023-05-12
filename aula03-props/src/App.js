import './App.css';
import Explicacao from './components/Explicacao';
import ExemploUm from './components/ExemploUm';
import ExemploDois from './components/ExemploDois';
import ExemploTres from './components/ExemploTres';

function App() {
  return (
    <div className="App">
      <Explicacao></Explicacao>
      {/*Exemplo 01*/}
      <ExemploUm 
        nome='Paulo Henrique'
      />

      {/*Exemplo 02*/}
      <ExemploDois
        modelo="HB20"
        marca="Hyunday"
        ano="2012"
        cor="Preto"
      />

      {/*Exemplo 03*/}
      <ExemploTres
        inputUm="Modelo"
        inputDois="Marca"
        inputTres="Ano"
        inputQuatro="Cor"
      />
    </div>
  );
}

export default App;
