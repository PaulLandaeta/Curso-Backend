# Certificacion Backend
## Que es Backend?
- Desarrollo y gestion de la logica de negocio, DB y funcionalidades del lado del servidor.
- Es como el esqueleto y el sistema nervioso de una aplicacion.
    
    - Logica de negocio
    - APIs
    - Autenticacion y Autorizacion
    - Gestion de DB
    - Seguridad

## Quien es un desarrollador backend?
- Es un desarrollador que se encarga de la logica de negocio, gestion de DB, APIs, escalabilidad y efeciencia, seguridad, etc.

## Rol y responsabilidades
- Diseño Arquitectura
- Eficacia y efiencia
- Privacidad de los datos
- Gestion de DB
- Despliegue CI/CD
- Testing

## Principios y acronimos de Desarrollo de Software
- SOLID 
    - Single Responsability Principle (SRP)
        - Concepto: Cada clase debe tener una sola responsabilidad.
        - Aplicacion en Java/Node.js: Cada clase debe tener una sola responsabilidad.

    - Open/Closed Principle (OCP)
        - Concepto: Las entidades de software deben estar abiertas para su extension, pero cerradas para su modificacion.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Liskov Substitution Principle (LSP)
        - Concepto: Las clases derivadas deben ser substituibles por sus clases bases.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Interface Segregation Principle (ISP)
        - Concepto: Los clientes no deben ser forzados a depender de interfaces que no usan.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

    - Dependency Inversion Principle (DIP)
        - Concepto: Las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones.
        - Aplicacion en Java/Node.js: Utilizar interfaces para definir contratos y clases abstractas para implementar comportamientos comunes.

- KISS
    - KEEP IT SIMPLE STUPID (KISS) 
        - Concepto: Mantener las cosas simples.
        - Aplicacion en Java/Node.js: Mantener las cosas simples.
    
- DRY
    - DON'T REPEAT YOURSELF (DRY)
        - Concepto: No repetirte a ti mismo.
        - Aplicacion en Java/Node.js: No repetirte a ti mismo.

- YAGNI
    - YOU AIN'T GONNA NEED IT (YAGNI)
        - Concepto: No implementar funcionalidades que no se necesitan.
        - Aplicacion en Java/Node.js: No implementar funcionalidades que no se necesitan.

- TDD
    - Test Driven Development (TDD)
        - Concepto: Escribir primero las pruebas y luego el codigo.
        - Aplicacion en Java/Node.js: Escribir primero las pruebas y luego el codigo.

- BDD
    - Behavior Driven Development (BDD)
        - Concepto: Escribir primero las pruebas y luego el codigo.
        - Aplicacion en Java/Node.js: Escribir primero las pruebas y luego el codigo.

## Arquitectura hexagonal
- La arquitectura hexagonal es una arquitectura de software que permite crear aplicaciones independientes del framework, la interfaz de usuario y de la base de datos.
- Su objetivo es separar la logica de negocio de los detalles tecnicos.
- Tambien es conocida como puertos y adaptadores. Esto por que 