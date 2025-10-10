import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/CartProvider"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import "../App.css"
import { useNavigate } from "react-router-dom"

function CartContainer() {
  const { cart, removeFromCart, clearCart, addToCart } = useContext(CartContext);
  const [removingId, setRemovingId] = useState(null);
  const [showEmptyMessage, setShowEmptyMessage] = useState(cart.length === 0);
  const navigate = useNavigate();

  useEffect(() => {
    setShowEmptyMessage(cart.length === 0);
  }, [cart]);

  const handleRemove = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingId(null);
    }, 300); 
  };

  const handleClear = () => {
    clearCart();
    setShowEmptyMessage(true);
  };

  const handleIncrease = (item) => {
    addToCart(item, 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1)
    } else {
      handleRemove(item.id)
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito</h2>

      {showEmptyMessage ? (
        <>
          <p className="cart-empty-text">No hay productos en el carrito.</p>
          <Link to="/">
            <Button className="btn-pink">Volver</Button>
          </Link>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li
                key={item.id}
                className={`cart-item ${removingId === item.id ? "removing" : ""}`}
              >
                <Image
                  src={item.thumbnail || item.image}
                  alt={item.title || item.name}
                  rounded
                  className="cart-img"
                />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.title || item.name}</p>
                  <p className="cart-item-detail">Precio: ${item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
                    <Button className="btn-outline-pink" onClick={() => handleDecrease(item)}>-</Button>
                    <span style={{ minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                    <Button className="btn-outline-pink" onClick={() => handleIncrease(item)}>+</Button>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="cart-remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>

          <div className="cart-total">Total: ${totalPrice}</div>

          <div className="cart-actions">
            <Button
              variant="outline"
              className="btn-outline-pink"
              onClick={handleClear}
            >
              Vaciar carrito
            </Button>

            <Link to="/">
              <Button className="btn-pink">Volver</Button>
            </Link>

            <Button className="btn-pink" onClick={() => navigate("/checkout")}>
              Checkout 
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer
