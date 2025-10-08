import { Link } from "react-router-dom" 
import Card from 'react-bootstrap/Card' 
import Col from 'react-bootstrap/Col' 
import Row from 'react-bootstrap/Row' 
import Container from 'react-bootstrap/Container'

function ItemList({ items = [] }) { 
  return ( 
    <Container className="mt-4"> 
      <Row> 
        {items.map(item => ( 
          <Col key={item.id} sm={12} md={6} lg={4} className="mb-4"> 
            <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}> 
              <Card style={{ cursor: 'pointer', borderRadius: '12px', border: '1px solid #ffc0cb', backgroundColor: '#fff0f5' }}> 
                <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} /> 
                <Card.Body> 
                  <Card.Title style={{ color: '#c71585' }}>{item.title}</Card.Title> 
                  <Card.Text style={{ color: '#ff1493', fontWeight: 'bold' }}>${item.price}</Card.Text> 
                </Card.Body> 
              </Card> 
            </Link> 
          </Col> 
        ))} 
      </Row> 
    </Container> 
  ); 
} 

export default ItemList