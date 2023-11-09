## Introducción a la Arquitectura Hexagonal

La Arquitectura Hexagonal, también conocida como Patrón de Puertos y Adaptadores, es un patrón de diseño que propone una estructura para construir aplicaciones con una separación clara entre la lógica de negocio y las interacciones con el mundo exterior (bases de datos, interfaces de usuario, servicios web, etc.).

## Principios Fundamentales
Independencia de la Lógica de Negocio: La lógica de negocio se encapsula dentro del núcleo de la aplicación y no depende de los detalles externos como bases de datos o frameworks.
Puertos y Adaptadores: Se definen "puertos" que representan los servicios que la aplicación ofrece o consume, y "adaptadores" que convierten los datos entre el formato que utiliza la lógica de negocio y el formato externo.

## Estructura de Carpetas Ejemplo

```plaintext
src/
├── main/
│   ├── java/
│   │   ├── application/
│   │   │   ├── ports/
│   │   │   │   ├── in/
│   │   │   │   │   └── OrderService.java
│   │   │   │   └── out/
│   │   │   │       └── OrderRepository.java
│   │   │   ├── service/
│   │   │   │   └── OrderServiceImpl.java
│   │   │   └── model/
│   │   │       └── Order.java
│   │   └── infrastructure/
│   │       ├── config/
│   │       ├── adapter/
│   │       │   ├── web/
│   │       │   │   └── OrderController.java
│   │       │   └── persistence/
│   │       │       └── OrderRepositoryImpl.java
│   └── resources/
└── test/

```

## Ejemplo

Vamos a implementar una aplicación que gestiona pedidos. La aplicación permitirá crear y listar pedidos.

### Puerto OrderService.java

```java 
package application.ports.in;

import application.model.Order;

public interface OrderService {
    void createOrder(Order order);
    List<Order> listOrders();
}

```

### Servicio OrderServiceImpl.java


```java 
package application.service;

import application.ports.in.OrderService;
import application.ports.out.OrderRepository;
import application.model.Order;

public class OrderServiceImpl implements OrderService {
    
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void createOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public List<Order> listOrders() {
        return orderRepository.findAll();
    }
}

```

### Adaptador de Persistencia OrderRepositoryImpl.java

```java 
package infrastructure.adapter.persistence;

import application.ports.out.OrderRepository;
import application.model.Order;

public class OrderRepositoryImpl implements OrderRepository {
    
    // Aquí se implementarían los métodos usando, por ejemplo, JPA o cualquier otro ORM

    @Override
    public void save(Order order) {
        // Implementación de la lógica de guardado de pedidos
    }

    @Override
    public List<Order> findAll() {
        // Implementación de la lógica para obtener todos los pedidos
    }
}

```

### Controlador Web OrderController.java

```java
package infrastructure.adapter.web;

import application.ports.in.OrderService;
import application.model.Order;

@RestController
@RequestMapping("/orders")
public class OrderController {
    
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Void> createOrder(@RequestBody Order order) {
        orderService.createOrder(order);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Order>> listOrders() {
        return ResponseEntity.ok(orderService.listOrders());
    }
}

```

<details>
  <summary> Haz clic para expandir!</summary>

## Tienda de Libros

### Contexto
Eres el arquitecto de software de una tienda de libros en línea. Se te ha pedido que diseñes e implementes el backend de la tienda utilizando la arquitectura hexagonal.

### Requisitos Funcionales
- Listado de Libros: Los usuarios deben poder listar los libros disponibles en la tienda.
- Añadir Libro: Los empleados de la tienda deben poder añadir nuevos libros al inventario.
- Buscar Libros: Los usuarios deben poder buscar libros por título y autor.
- Detalles del Libro: Los usuarios deben poder ver los detalles de un libro específico.
- Compra de Libros: Los usuarios deben poder comprar libros, lo cual disminuye el inventario.

### Requisitos No Funcionales
- El sistema debe estar abierto para la extensión, pero cerrado para la modificación (principio Open/Closed).
- El sistema debe ser fácilmente testeable.
- La lógica de negocio debe estar desacoplada de la interfaz de usuario y la base de datos.

### Tarea 

### Diseño de Puertos y Adaptadores:

- Define los puertos de entrada (inbound ports) necesarios para los requisitos funcionales.
- Define los puertos de salida (outbound ports) para interactuar con la base de datos y otros sistemas externos.
### Implementación de la Lógica de Negocio:

- Crea las clases de dominio necesarias, como Book, Order, Inventory, etc.
- Implementa la lógica de negocio en servicios que interactúan a través de los puertos definidos.

### Adaptadores:

- Implementa adaptadores de entrada que permitan a los usuarios interactuar con tu sistema (por ejemplo, una API REST).
- Implementa adaptadores de salida para interactuar con una base de datos simulada.

</details>