import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

function CartContainer() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#c71585" }}>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item) => (
            <li 
              key={item.id} 
              style={{ 
                display: "flex", 
                alignItems: "center",
                justifyContent: "space-between", 
                marginBottom: "10px", 
                borderBottom: "1px solid #ffc0cb", 
                paddingBottom: "10px" 
              }}
            >
              <Image 
                src={item.thumbnail || item.image} 
                alt={item.title || item.name} 
                rounded 
                style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "10px" }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{item.title || item.name}</p>
                <p style={{ margin: 0 }}>Cantidad: {item.quantity}</p>
                <p style={{ margin: 0 }}>Precio: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">
        <Button 
          style={{ backgroundColor: "#ff69b4", borderColor: "#ff69b4", marginTop: "20px" }}
        >
          Volver
        </Button>
      </Link>
    </div>
  );
}

export default CartContainer
