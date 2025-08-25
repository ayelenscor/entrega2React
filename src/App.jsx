import './App.css'
import Cart from './components/Cart'
import Menu from './components/menu'
import Search from './components/Search'

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Menu />
      <Cart text='Mi Carrito' />
      <Search text='Buscar...' />
    </div>
  )
}
export default App
