import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "../App.css"

function Checkout() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/")
    }, 3000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <p>Finaliza con la orden de tu compra</p>

        <Form className="checkout-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Celular</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu número de celular" />
          </Form.Group>

          <Button className="checkout-submit" type="submit">
            Checkout
          </Button>
        </Form>

        {showPopup && (
          <div className="checkout-popup">
            <p>Su orden de compra fue exitosa! 🎉</p>
            <p> Le enviamos un email de confirmación</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout
