import './App.css';
import Explicacao from './components/Explicacao';
import ExemploUm from './components/ExemploUm';
import ExemploDois from './components/ExemploDois';

function App() {
  return (
    <div className="App">
      <Explicacao></Explicacao>
      <ExemploUm 
        nome='Paulo Henrique'
      />
      <ExemploDois
        modelo="HB20"
        marca="Hyunday"
        ano="2012"
        cor="Preto"
      />
    </div>
  );
}

export default App;
