# 🍓Skin - Tienda Online de Productos de Cuidado

🍓Skin es una **ecommerce** de productos de cuidado y belleza que permite a los usuarios explorar categorías, agregar productos al carrito, gestionar su contenido y finalizar compras mediante un checkout.  

---

## 🔧 Tecnologías y Dependencias

El proyecto está construido con **React** y varias librerías de apoyo:

- **React**: ^19.1.1  
- **React DOM**: ^19.1.1  
- **React Router / React Router DOM**: ^7.9.1  
- **Bootstrap**: ^5.3.8  
- **React Bootstrap**: ^2.10.10  
- **Bootstrap Icons**: ^1.13.1  
- **React Icons**: ^5.5.0  
- **Lucide React**: ^0.544.0  
- **Firebase**: ^12.3.0  

---

## 🏠 Estructura y Funcionalidades

### Página de inicio
- Muestra tres categorías principales de productos.
- Los productos se pueden filtrar según la categoría seleccionada.
- Navegación a los detalles de cada producto.

### Carrito de compras
- Los usuarios pueden **agregar productos** al carrito.
- **Eliminar un producto** o **vaciar todo el carrito**.
- Mostrar el **total de la compra** en tiempo real.
- Botones interactivos con **tonalidades rosas**, consistentes en toda la interfaz.
- Animaciones de **fade** al eliminar productos del carrito.

### Checkout
- Formulario para completar la compra con:
  - Número de celular
  - Email
- Al confirmar la compra:
  - Se redirige al inicio.
  - Se muestra un **popup** con mensaje:  
    `"Su orden de compra fue exitosa! Gracias por comprar en Frutilla Skin <3"`  

---

## 🎨 Estilo y UI
- **Tonalidades rosas** predominantes en botones, textos y bordes.
- Botones con **hover rosa intenso** y letras blancas.
- Diseño **responsive** para distintos tamaños de pantalla.
- Uso de **Bootstrap** y **React Bootstrap** para componentes y layout.

---

## ⚡ Funcionalidades técnicas
- Gestión del carrito mediante **React Context**.
- Routing con **React Router v7**.
- Productos obtenidos de **Firebase** (Base de datos de productos).
- Animaciones suaves y transiciones al interactuar con botones.
- Reutilización de componentes (NavBar, CartWidget, ItemCount, etc.)

---

