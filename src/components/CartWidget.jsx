import { useContext } from 'react'
import { CartContext } from '../Context/CartProvider'
import { useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

function CartWidget() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
      <i className="bi bi-cart" style={{ fontSize: '1.8rem', color: 'white' }}></i>
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            backgroundColor: '#ff1493',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}

export default CartWidget
