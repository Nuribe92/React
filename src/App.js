import logo from './logo.svg';
import './App.css';
import MensajeEstatico from './mensajeEstatico';

function App() {
  var nombre = "Nestor Uribe";
  var presentacion = <h2>Hola Mundo soy {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {alert("Hola soy")}
        {presentacion}
        <MensajeEstatico/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
