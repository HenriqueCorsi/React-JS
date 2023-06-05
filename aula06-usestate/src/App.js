import './App.css';
import Introducao from './components/Introducao.js';
import Boxexemplo from './components/Boxexemplo';
import Exemploum from './components/Exemplos/Exemploum';

function App() {
  return (
    <div className="App">
      <Introducao/>
      <Boxexemplo desc="Exemplo 01"/>
      <Exemploum
      desc01="Placa"
      desc02="Modelo"
      desc03="Marca"
      desc04="Ano"
      />
    </div>
  );
}

export default App;
 