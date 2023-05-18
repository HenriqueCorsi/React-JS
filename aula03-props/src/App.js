import './App.css';
import Explicacao from './components/Explicacao';
import ExemploUm from './components/ExemploUm';
import ExemploDois from './components/ExemploDois';
import ExemploTres from './components/ExemploTres';
import ExemploQuatro from './components/ExemploQuatro';

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
        inputExp="No Exemplo 03 é construído uma Form onde os placeholder são passados através de Props."
        inputUm="Modelo"
        inputDois="Marca"
        inputTres="Ano"
        inputQuatro="Cor"
      />

      <ExemploTres
        inputExp="Continuando Exemplo 03, só que desta vez estou reutilizando o componente FORM para reutiliza-lo."
        inputUm="Nome Completo"
        inputDois="Cargo"
        inputTres="CPF"
        inputQuatro="Data Nascimento"
      />

     <ExemploQuatro
      desc="Exemplo 04 é criado um nav-bar onde cada opção é um props, dessa maneira caso seje preciso criar uma nova opção
      dentro do nav-bar, basta reutilizar o componente nav-bar."
     />
    </div>
  );
}

export default App;
