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

```bash
tienda-de-libros/
│
├── src/
│   ├── application/
│   │   ├── ports/
│   │   │   ├── in/
│   │   │   │   └── BookService.java
│   │   │   └── out/
│   │   │       ├── BookRepository.java 
│   │   │       └── InventoryPort.java 
│   │   │
│   │   ├── model/
│   │   │   └── Book.java
│   │   │
│   │   ├── service/
│   │   │   └── BookServiceImpl.java 
│   │   │
│   ├── infrastructure/
│   │   ├── adapter/
│   │   │   ├── persistence/
│   │   │   │   └── BookRepositoryImpl.java
│   │   │   └── web/
│   │   │       └── BookController.java
│   │   │
│   └── Main.java
│
├── test/
│   ├── application/
│   │   └── service/
│   │       └── BookServiceImplTest.java
│   │
│   ├── infrastructure/
│   │   ├── adapter/
│   │   │   ├── persistence/
│   │   │   │   └── BookRepositoryImplTest.java
│   │   │
│   └── TestMain.java
│
└── resources/
    ├── application.properties
```

- `src/`: Contiene el código fuente de la aplicación.
  - `application/`: Almacena las clases relacionadas con la lógica de la aplicación.
    
    - `ports/`: Contiene los puertos de entrada y salida.
      - `in/`: Contiene los puertos de entrada.
        - `BookService.java`: Este es el puerto de entrada que define métodos como `addBook`, `listBooks`, `searchBooksByTitle`, `searchBooksByAuthor`, `getBookDetails`, y `placeOrder`.
     
      - `out/`: Contiene los puertos de salida.
        - `BookRepository.java`: Este es el puerto de salida que podría definir métodos como `saveBook`, `findBookById`, `findAllBooks`, `findBooksByTitle`, y `findBooksByAuthor`.
        - `InventoryPort.java`: Este es el puerto de salida que podría definir métodos como `addToInventory` y `decreaseInventory`.
    
    - `model/`: Contiene las clases que representan el modelo de dominio.
      - `Book.java`: Este es el modelo de dominio que puede contener propiedades como `id`, `title`, `author`, `price`, `quantity`, y `description`.
    
    - `service/`: Contiene las clases que implementan los puertos de entrada.
      - `BookServiceImpl.java`: Este es el servicio que implementa el puerto de entrada `BookService` y, por lo tanto, implementa los métodos definidos en ese puerto.

- `infrastructure/`: Contiene los adaptadores de entrada y salida.
  - `adapter/`: Contiene los adaptadores de entrada y salida.
    - `persistence/`: Contiene los adaptadores de salida.
      - `BookRepositoryImpl.java`: Este es el adaptador de salida que implementa el puerto de salida `BookRepository` y, por lo tanto, implementa los métodos definidos en ese puerto.
    
    - `web/`: Contiene los adaptadores de entrada.
      - `BookController.java`: Este es el adaptador de entrada que implementa el puerto de entrada `BookService` y, por lo tanto, implementa los métodos definidos en ese puerto.

- `test/`: Contiene las pruebas unitarias para las clases de la aplicación y los adaptadores.
  - `application/`: Contiene las pruebas unitarias para las clases de la aplicación.
    - `service/`: Contiene las pruebas unitarias para las clases de la aplicación.
      - `BookServiceImplTest.java`: Este es el test para el servicio `BookServiceImpl`, y en este archivo, escribirías pruebas para cada uno de los métodos implementados en `BookServiceImpl`.

- `resources/`: Aquí puedes incluir archivos de configuración, como `application.properties`, si es necesario.
  - `application.properties`: Este es el archivo de configuración de la aplicación, que puede contener propiedades de configuración necesarias para la aplicación.


## Autores
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ElJoamy">
            <img src="https://avatars.githubusercontent.com/u/68487005?v=4" width="50;" alt="ElJoamy"/>
            <br />
            <sub><b>Joseph Anthony Meneses Salguero</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JZane21">
            <img src="https://avatars.githubusercontent.com/u/82000556?v=4" width="50;" alt="JZane21"/>
            <br />
            <sub><b>Jose Samuel Carrasco Encinas</b></sub>
        </a>
    </td></tr>
</table>