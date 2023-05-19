import './App.css';
import TitleBox from './components/TitleBox';
import ExemploUm from './components/exemplo01/ExemploUm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>PropTypes</h1>
        <h2>É uma ferramanta do React que nos possibilita difinir os tipos que cada prop/components irá receber</h2>
      </header>
      <TitleBox
        titleDesc="Exemplo 01 - Nessa lista de veículos tudo que for string ou number está definido com ajuda do proptypes."
      />
      <ExemploUm
        model={2012}
        brand="Hyunday"
        year="teste"
      />
    </div>
  );
}

export default App;
