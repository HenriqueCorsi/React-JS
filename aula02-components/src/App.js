import logo from './logo.svg';
import './App.css';
import HelloWord from './components/helloWord/HelloWord';

function App() {
  return (
    <div className="App">
      {/* Explicação */}
      <h1>Components</h1>
      <div className='box-desc'>
        <p>É um padrão de desenvolvimento onde eu consigo transformar cada item do meu projeto em componentes para reutiliza-lo em algum momento da minha aplicação. É possível criar um arquivo contendo esse componente e depois importá-lo aonde precisar utilizar.</p>
      </div>
      <h2>Exemplos</h2>
      <div className='box-list'>
        <ul>
          <li>Nav Bar</li>
          <li>Menu Lateral</li>
          <li>Botão</li>
          <li>Footer</li>
          <li>Seaction</li>
          <li>Formulário</li>
        </ul>
      </div>
      <hr></hr>
      {/*-------------------------------------------------------------------------------------*/}
      <HelloWord/>
    </div>
  );
}

export default App;
