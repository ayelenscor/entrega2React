import { useParams } from "react-router" 
import { useEffect, useState } from "react" 
import { getProducts} from '../firebase/db'
import ItemList from "./ItemList" 


function ItemListContainer({ category: defaultCategory }) { 
  const { id } = useParams(); 
  const category = id || defaultCategory; 
  const [products, setProducts] = useState([]) 

  useEffect(() => { 
    getProducts()
    .then(items => setProducts(items))
  }, [category]); 

  return ( 
    <div style={{ padding: "20px" }}> 
      <h2 style={{ color: "#c71585", textTransform: "capitalize" }}> 
        {category === "all" ? "Todos los productos" : category} 
      </h2> 
      <ItemList items={products} /> 
    </div> 
  ); 
} 

export default ItemListContainer