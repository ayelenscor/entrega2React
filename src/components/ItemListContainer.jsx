import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'

function ItemListContainer({ setCartCount, category }) {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    let url = 'https://dummyjson.com/products'

    if (category === 'Limpieza Facial') url = 'https://dummyjson.com/products/category/smartphones'
    if (category === 'Limpieza Corporal') url = 'https://dummyjson.com/products/category/laptops'
    if (category === 'Hidratacion') url = 'https://dummyjson.com/products/category/fragrances'

    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [category])

  return (
    <>
      {selectedItem ? (
        <ItemDetail item={selectedItem} onBack={() => setSelectedItem(null)} setCartCount={setCartCount} />
      ) : (
        <ItemList items={items} onSelect={setSelectedItem} />
      )}
    </>
  );
}

export default ItemListContainer
