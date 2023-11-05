# Single Responsibility Principle (SRP)

## ¿Qué es el SRP?

El Single Responsibility Principle es un principio de programación que sostiene que una clase debe tener una y solo una razón para cambiar. Esto significa que cada clase debe encargarse de una única parte de la funcionalidad del software, lo que se traduce en que tiene una única responsabilidad.

## Importancia del SRP

Imagina que en el mundo Pokémon, un solo Pokémon tratara de hacerlo todo: luchar, curar, volar y nadar. ¡Sería un caos! Y eso es exactamente lo que queremos evitar en nuestro código. Al asegurarnos de que cada clase tenga una única responsabilidad, mantenemos nuestro código modular, fácil de entender y de mantener.

## Ejemplo con Pokémon

Supongamos que estamos creando un juego de Pokémon y tenemos una clase `Pokemon`. Sin el SRP, nuestra clase podría verse sobrecargada con múltiples métodos que no están relacionados directamente con las características esenciales de un Pokémon.

### Antes de aplicar el SRP

```java
class Pokemon {
    private String name;
    private String type;
    // Constructor, getters y setters
    
    public void attack() {
        // Método para que el Pokémon ataque
    }
    
    public void heal() {
        // Método para que el Pokémon se cure
    }
    
    public void fly() {
        // Método para que el Pokémon vuele
    }
    
    public void swim() {
        // Método para que el Pokémon nade
    }
}
```

En el ejemplo anterior, nuestra clase Pokemon hace demasiadas cosas. Veamos cómo podríamos aplicar el SRP para mejorar el diseño de nuestra clase.

Después de aplicar el SRP
Refactorizamos el código creando interfaces y clases que se responsabilizan de una sola acción.
```java 
class Pokemon {
    private String name;
    private String type;
    // Constructor, getters y setters
}

interface Attacker {
    void attack();
}

interface Healer {
    void heal();
}

interface Flyer {
    void fly();
}

interface Swimmer {
    void swim();
}

class Pikachu implements Attacker {
    public void attack() {
        System.out.println("Pikachu usa Impactrueno!");
    }
}

class Lapras implements Swimmer, Attacker {
    public void swim() {
        System.out.println("Lapras nada tranquilamente!");
    }

    public void attack() {
        System.out.println("Lapras usa Hidrobomba!");
    }
}

// Y así sucesivamente para otros Pokémon y acciones
```

Con este nuevo enfoque, cada clase tiene una responsabilidad clara y está separada de las demás. Esto facilita la comprensión del código y su mantenimiento.

## Ejercicio

- [ ] Implementar las interfaces Healer y Flyer con ejemplos de Pokémon que puedan curarse o volar, respectivamente.

- [ ] Crea una pequeña simulación donde diferentes Pokémon realicen acciones de acuerdo con sus habilidades.

## Tarea 

<details>
  <summary> Haz clic para expandir!</summary>
  
### Aplicando el Interface Segregation Principle (ISP) a un Sistema de Gestión de Cine
  
### Contexto

Imagina que estás diseñando un sistema para un cine que maneja diversas operaciones como la     proyección de películas, la venta de boletos y la oferta de snacks en la concesión. Inicialmente, se diseñó una interfaz grande que maneja todas estas operaciones. Sin embargo, esto está causando problemas, ya que cada tipo de empleado (operador de proyección, vendedor de boletos, personal de concesión) no debería tener acceso a los métodos que no se relacionan con su trabajo específico.

### Tu Misión
Tu tarea es refactorizar este sistema aplicando el Interface Segregation Principle. Deberás dividir la interfaz grande en interfaces más pequeñas y específicas que se adapten mejor a las necesidades de cada tipo de empleado.

### Requerimientos

- [ ] **Interfaz MovieProjector:**  Debe contener métodos relacionados con la proyección de películas, como startProjection(), stopProjection() y checkProjectorStatus().

- [ ] **Interfaz TicketSeller:** Debe contener métodos para la venta de boletos, como sellTicket(), refundTicket() y checkTicketAvailability().

- [ ] **Interfaz ConcessionStandWorker:** Debe contener métodos para el personal de la concesión, como serveSnack(), restockItems() y processPayment().

- [ ] Define las tres interfaces con los métodos sugeridos.

- [ ] Crea clases específicas para cada tipo de empleado que implementen estas interfaces.
Asegúrate de que cada empleado solo tenga acceso a los métodos que necesita para realizar su trabajo.

  
</details>


## Conclusión

Justo como cada Pokémon tiene tipos y habilidades específicas, nuestras clases deben tener responsabilidades únicas. Esto nos ayuda a mantener nuestro código organizado, flexible y listo para evolucionar, casi como un Pokémon que está listo para subir de nivel.