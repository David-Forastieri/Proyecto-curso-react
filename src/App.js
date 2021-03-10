import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import NavBar from './components/Navbar/Navbar';
import Categorias from './containers/Categorias';
import ItemDatailContainer from './containers/ItemDatailContainer';
import ItemLIstContainer from './containers/ItemLIstContainer';
import { CartProvider } from './context/CartContext';



const App = () => {

  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route exact path='/'>
            <ItemLIstContainer greeting={'Bienvenido!! Toda tu ropa deportiva la encontras aca.'} />
          </Route>

          <Route path='/detalle/:id'>
            <ItemDatailContainer />
          </Route>

          <Route path='/categorias/:idTipo'>
            <Categorias />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='*' children={<h1>Not found</h1>} />

        </Switch>

      </BrowserRouter>

    </CartProvider>
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
