import Card from 'react-bootstrap/Card' 
import ItemCount from './ItemCount' 

function Item({ item }) {
    <Card style={{ width: '18rem', margin: '10px' }}> 
      <Card.Img variant="top" src={item.image} alt={item.name} /> 
      <Card.Body> 
        <Card.Title>{item.name}</Card.Title> 
        <Card.Text> {item.description} </Card.Text> 
        <Card.Text style={{ fontWeight: 'bold', color: '#c71585' }}> ${item.price} </Card.Text> 
        <ItemCount item={item} /> 
      </Card.Body> 
    </Card> 
}

export default Item