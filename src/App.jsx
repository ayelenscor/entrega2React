import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [category, setCategory] = useState('all')
  return (
    <>
      <NavBar cartCount={cartCount} setCategory={setCategory} />
      <ItemListContainer setCartCount={setCartCount} category={category} />
    </>
  )
}

export default App
