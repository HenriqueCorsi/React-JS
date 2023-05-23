import './App.css';
import Explicacao from './components/Explicacao';
import BoxExemplo from './components/BoxExemplo';
import ExemploUm from './components/Events/ExemploUm';
import ExemploDois from './components/Events/ExemploDois';

function App() {
  return (
    <div className="App">
      <Explicacao/>

      {/* EXEMPLO 01 */}
      <BoxExemplo 
        title="Exemplo 01"
      />
      <ExemploUm/>

      {/* EXEMPLO 02 */}
      <BoxExemplo
        title="Exemplo 02"
      />
      <ExemploDois/>
    </div>
  );
}

export default App;
