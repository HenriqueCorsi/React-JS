import './App.css';
import Explicacao from './components/Explicacao';
import BoxExemplo from './components/BoxExemplo';
import ExemploUm from './components/Events/ExemploUm';
import ExemploDois from './components/Events/ExemploDois';
import ExemploTres from './components/Events/ExemploTres';

function App() {
  return (
    <div className="App">
      <Explicacao/>

      {/* Exemplo 01 */}
      <BoxExemplo 
        title="Exemplo 01 - OnClick para exibir uma mensagem"
      />
      <ExemploUm/>

      {/* Exemplo 02 */}
      <BoxExemplo
        title="Exemplo 02 - OnClick para alterar a vizualização da página"
      />
      <ExemploDois/>
      {/* Exemplo 03 */}
      <BoxExemplo
        title="Exemplo 03"
      />
      <ExemploTres
        placa="Placa"
        modelo="Modelo"
        marca="Marca"
        ano="Ano"
      />
    </div>
  );
}

export default App;
