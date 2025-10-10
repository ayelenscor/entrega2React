import { useContext } from 'react'
import { CartContext } from '../Context/CartProvider'
import { useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../App.css'

function CartWidget() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const navigate = useNavigate();

  return (
    <div className="cart-widget" onClick={() => navigate('/cart')}>
      <i className="bi bi-cart"></i>
      {totalItems > 0 && (
        <span className="cart-widget-count">{totalItems}</span>
      )}
    </div>
  );
}

export default CartWidget
