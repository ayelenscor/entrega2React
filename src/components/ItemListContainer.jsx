import { useParams } from "react-router"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer({ category: defaultCategory }) {
  const { id } = useParams();
  const category = id || defaultCategory;
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = category && category !== "all"
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.products))
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
