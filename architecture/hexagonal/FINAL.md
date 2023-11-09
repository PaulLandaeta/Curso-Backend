# Diseño de Puertos y Adaptadores

## Puertos de Entrada:

- BookManagementPort - para operaciones de añadir y listar libros.
- OrderPort - para realizar compras y gestionar pedidos.

## Puertos de Salida:

- BookRepositoryPort - para interactuar con la base de datos de libros.
- OrderRepositoryPort - para interactuar con la base de datos de órdenes.

## Implementación de la Lógica de Negocio

## Dominio:

- Book - con propiedades como title, author, price, inventoryCount, etc.
- Order - con propiedades como bookId, quantity, userId, etc.
## Servicios:

- BookService - implementa lógica para añadir libros y obtener detalles.
- OrderService - implementa lógica para manejar la compra de libros.

## Adaptadores

### Adaptadores de Entrada:

- BookController - API endpoints para listar y añadir libros.
- OrderController - API endpoint para realizar una compra.

### Adaptadores de Salida:

- BookRepository - implementación de la interfaz BookRepositoryPort para interactuar con la base de datos de libros.
- OrderRepository - implementación de la interfaz OrderRepositoryPort para interactuar con la base de datos de órdenes.