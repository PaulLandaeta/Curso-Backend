# Arquitectura de Tienda de Libros

```plaintext
src/
├── main/
│   ├── java/
│   │   ├── application/
│   │   │   ├── ports/
│   │   │   │   ├── in/
│   │   │   │   │   └── OrderService.java
│   │   │   │   └── in/
│   │   │   │       └── BookStoreApplication.java

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
