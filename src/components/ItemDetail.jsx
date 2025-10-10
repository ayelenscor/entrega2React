import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'
import '../App.css'

function ItemDetail({ item }) {
  if (!item) {
    return <p style={{ color: '#c71585' }}>Cargando producto...</p>;
  }

  return (
    <Container className="item-detail-container">
      <Link to="/">
        <Button className="btn-volver">Volver</Button>
      </Link>

      <Row>
        <Col md={6}>
          <Image src={item.image} alt={item.name} fluid className="item-detail-img" />
        </Col>

        <Col md={6}>
          <div className="item-detail-info">
            <h2 className="item-detail-name">{item.name}</h2>
            <p className="item-detail-price">Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount item={item} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail
