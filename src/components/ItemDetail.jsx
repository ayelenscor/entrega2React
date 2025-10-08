import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount';
function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(() => setItem(null));
  }, [id]);

  if (!item) return <p style={{ color: '#c71585' }}>Cargando producto...</p>;

  const imgStyle = {
    borderRadius: '12px',
    maxHeight: '400px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const infoStyle = {
    padding: '16px',
    border: '1px solid #ffc0cb',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(255,105,180,0.3)',
    backgroundColor: '#fff0f5',
  };

  return (
    <Container className="mt-4">
      <Link to="/">
        <Button style={{ marginBottom: '20px', backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: 'white' }}>
          Volver
        </Button>
      </Link>
      <Row>
        <Col md={6}>
          <Image src={item.thumbnail} alt={item.title} fluid style={imgStyle} />
        </Col>
        <Col md={6}>
          <div style={infoStyle}>
            <h2 style={{ color: '#c71585' }}>{item.title}</h2>
            <p style={{ color: '#ff1493', fontWeight: 'bold' }}>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount item={item} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail