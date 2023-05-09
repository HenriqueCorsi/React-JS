import logo from './logo.svg';
import './App.css';

function App() {

  const nomeCompleto = 'Paulo Henrique Corsi dos Santos'
  const n1 = 75
  const n2 = 88
  const soma = n1 + n2

  
  function verificaIdade(idade){
    if(idade >= 18){
      var txt = 'Maior de Idade'
      return txt
    }else{
      var txt = 'Menor de Idade'
      return txt
    }
  }

  return (
    <div className="App">
      <h1>Entendo a extensão JSX</h1>

      <div className = 'box'>
        <h2>JSX</h2>
        <p>É uma extensão para que possamos escrever em html dentro da linguagem JavaScript</p>
      </div>

      {/* ------------------------------ Exemplo 01 ------------------------------ */}
      <div className = 'box explicacao'>
        <h2>No bloco abaixo o meu nome está armazenado dentro de uma váriavel e graças ao JSX consigo interpolar essa váriavel facilmente com o JavaScript</h2>
      </div>
      <div className = 'box second'>
        <h2>Exemplo 01</h2>
        <p>Seja Bem Vindo ao Mundo React {nomeCompleto}</p>
      </div>

      {/* -------------------------------- Exemplo 02 ------------------------------ */}
      <div className = 'box explicacao'>
        <h2>No bloco abaixo os valores descritos estão todos dentro de váriais</h2>
      </div>
      <div className = 'box second'>
        <h2>Exemplo 02</h2>
        <p>A Soma entre {n1} + {n2} é igual a {soma}</p>
      </div>

       {/* -------------------------------- Exemplo 03 ------------------------------*/}
       <div className = 'box explicacao'>
        <h2>No bloco abaixo é indicado se uma pessoa é ou não é maior ou menor de idade a partir de uma função desnvolvida no JavaScript</h2>
      </div>
      <div className = 'box second'>
        <h2>Exemplo 03</h2>
        <p>{verificaIdade(20)}</p>
      </div>
    </div>
  );
}

export default App;
