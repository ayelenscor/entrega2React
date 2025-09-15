import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function ItemList({ items = [], onSelect }) {
  const cardStyle = {
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    borderRadius: '12px',
    border: '1px solid #ffc0cb',
    backgroundColor: '#fff0f5'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(255,105,180,0.4)'
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)'
    e.currentTarget.style.boxShadow = 'none'
  };

  return (
    <Container className="mt-4">
      <Row>
        {items.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
            <Card
              style={cardStyle}
              onClick={() => onSelect(item)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={item.thumbnail}
                style={{ height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#c71585' }}>{item.title}</Card.Title>
                <Card.Text style={{ color: '#ff1493', fontWeight: 'bold' }}>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList
