import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';


function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ff69b4" }} variant="dark">
      <Container>
        <Navbar.Brand>Frutilla Skin 🍓</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="category/skin-care">Limpieza Facial</Nav.Link>
            <Nav.Link as={Link} to="category/womens-jewellery">Limpieza Corporal</Nav.Link>
            <Nav.Link as={Link} to="category/womens-bags">Hidratación</Nav.Link>
          </Nav>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <i className="bi bi-cart" style={{ fontSize: "1.8rem", color: "white" }}></i>
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                backgroundColor: "#ff1493",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              0
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
