import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'

function ItemDetail({ item, onBack, setCartCount }) {
  const imgStyle = { borderRadius: '12px', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }
  const infoStyle = {
    padding: '16px',
    border: '1px solid #ffc0cb',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(255,105,180,0.3)',
    backgroundColor: '#fff0f5',
  };

  const handleAddToCart = (count) => {
    setCartCount(prev => prev + count);
  };

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={onBack} style={{ marginBottom: '20px' }}>
        Volver
      </Button>
      <Row>
        <Col md={6}>
          <Image src={item.thumbnail} alt={item.title} fluid style={imgStyle} />
        </Col>
        <Col md={6}>
          <div style={infoStyle}>
            <h2 style={{ color: '#c71585' }}>{item.title}</h2>
            <p style={{ color: '#ff1493', fontWeight: 'bold' }}>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail
