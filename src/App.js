//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Index';
import ItemLIstContainer from './container/ItemLIstContainer';
import ItemCount from './components/contador/ItemCount';

const App = () => {
  return(
    <>
      <NavBar />
      <ItemLIstContainer greeting={'Bienvenido!! Toda tu ropa deportiva la encontras aca.'} />
      <ItemCount stock={9} initial={1} />
    </>
  )
}

















/*
let estilos = {color: 'red',background: 'violet'};

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2 style={estilos}>hola perro</h2>

        <button onClick={() =>{alert('holaaaaaaaaa')}}/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
*/

export default App;
