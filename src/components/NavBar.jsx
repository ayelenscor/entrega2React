import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'

function NavBar({ cartCount, setCategory }) {
  const categories = ['Limpieza Facial', 'Limpieza Corporal', 'Hidratacion'];

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ff69b4' }} variant="light">
      <Container>
        <Navbar.Brand style={{ color: '#fff', fontWeight: 'bold' }}> 🍓 Frutilla Skin</Navbar.Brand>
        <Nav className="me-auto">
          {categories.map(cat => (
            <Nav.Link 
              key={cat} 
              style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => setCategory(cat)} 
            >
              {cat}
            </Nav.Link>
          ))}
        </Nav>

        <Button 
          variant="light" 
          style={{ position: 'relative', border: 'none', background: 'transparent' }}
        >
          <FaShoppingCart size={28} color="#fff" />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: '#ff1493',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar
