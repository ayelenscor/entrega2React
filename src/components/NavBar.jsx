import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ff69b4' }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">🍓Skin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/skin-care">Limpieza Facial</Nav.Link>
            <Nav.Link as={Link} to="/category/womens-jewellery">Limpieza Corporal</Nav.Link>
            <Nav.Link as={Link} to="/category/womens-bags">Hidratación</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
