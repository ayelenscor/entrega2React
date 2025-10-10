import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app)

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'))
  const products = []

  querySnapshot.forEach(doc => {
    products.push({ ...doc.data(), id: doc.id })
  })

  return products
}

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    return null
  }
}
