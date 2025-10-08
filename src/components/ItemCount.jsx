import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../Context/CartProvider'

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart(item, count);
    setCount(1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <Button
        onClick={handleDecrease}
        style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: 'white' }}
      >
        -
      </Button>
      <span style={{ margin: '0 10px', fontWeight: 'bold', color: '#c71585' }}>
        {count}
      </span>
      <Button
        onClick={handleIncrease}
        style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: 'white' }}
      >
        +
      </Button>
      <Button
        onClick={handleAddToCart}
        style={{ marginLeft: '10px', backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: 'white' }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount
