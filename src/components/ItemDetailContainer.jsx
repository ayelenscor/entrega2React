import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductById } from "../firebase/db" 

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (!id) return
    getProductById(id).then(product => setItem(product))
  }, [id])

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
