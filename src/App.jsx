import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <div className="navbar">
        <NavBar />
        <CartWidget />
      </div>
      <ItemListContainer greeting="¡Bienvenido a Frutilla Skin! 🍓" />
    </>
  );
}

export default App

