import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartProvider'
import Button from 'react-bootstrap/Button'

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => { if (count > 1) setCount(count - 1); }

  const handleAddToCart = () => {
    addToCart(item, count);
  };

  return (
    <div className="item-count">
      <Button onClick={handleDecrease} variant="outline-danger">-</Button>
      <span style={{ margin: '0 10px', fontWeight: 'bold', color: '#c71585' }}>{count}</span>
      <Button onClick={handleIncrease} variant="outline-danger">+</Button>
      <Button onClick={handleAddToCart} style={{ marginLeft: '10px', backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: 'white' }}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount
