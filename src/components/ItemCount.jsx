import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial)

  const handleIncrease = () => { if (count < stock) setCount(count + 1); }
  const handleDecrease = () => { if (count > 1) setCount(count - 1); }

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <Button variant="outline-danger" onClick={handleDecrease} style={{ borderColor: '#ff69b4', color: '#c71585' }}>-</Button>
      <span style={{ margin: '0 10px', fontWeight: 'bold', color: '#c71585' }}>{count}</span>
      <Button variant="outline-danger" onClick={handleIncrease} style={{ borderColor: '#ff69b4', color: '#c71585' }}>+</Button>
      <Button 
        style={{ marginLeft: '10px', backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: '#fff' }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount

