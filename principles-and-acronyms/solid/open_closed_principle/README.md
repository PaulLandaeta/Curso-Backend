# Open/Closed Principle (OCP)
## Introducción al OCP

El Open/Closed Principle es uno de los cinco principios SOLID de la programación orientada a objetos. Establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. En otras palabras, deberías poder agregar nuevas funcionalidades sin cambiar el código existente.

## Importancia del OCP

Cumplir con el OCP nos ayuda a crear sistemas más mantenibles y escalables, reduciendo el riesgo de errores al modificar código existente. Es como tener un equipo de Pokémon donde puedes añadir nuevos Pokémon sin tener que cambiar los que ya tienes.

## Ejemplo Violando el OCP

Imagina que tienes una clase `Pokeball` que puede contener diferentes tipos de Pokémon. Cada vez que añades un nuevo tipo de Pokémon, tienes que modificar la clase `Pokeball` para manejar el nuevo tipo.

```java
class Pokeball {
    private Pokemon pokemon;

    public Pokeball(Pokemon pokemon) {
        this.pokemon = pokemon;
    }

    public void catchAction() {
        if (pokemon instanceof Pikachu) {
            System.out.println("Pikachu fue atrapado!");
        } else if (pokemon instanceof Charmander) {
            System.out.println("Charmander fue atrapado!");
        }
        // Si se añade un nuevo tipo de Pokémon, tendrás que modificar este método.
    }
}
```

Cada vez que se introduce un nuevo tipo de Pokémon, el método catchAction() tiene que modificarse, lo cual viola el OCP.

Aplicando el OCP
Podemos aplicar el OCP haciendo que Pokeball dependa de una abstracción en lugar de los detalles concretos de cada Pokémon.

```java
interface Catchable {
    void catchPokemon();
}

class Pikachu implements Catchable {
    public void catchPokemon() {
        System.out.println("Pikachu fue atrapado!");
    }
}

class Charmander implements Catchable {
    public void catchPokemon() {
        System.out.println("Charmander fue atrapado!");
    }
}

class Pokeball {
    private Catchable pokemon;

    public Pokeball(Catchable pokemon) {
        this.pokemon = pokemon;
    }

    public void catchAction() {
        pokemon.catchPokemon();
    }
}

```

Ahora, la clase Pokeball no necesita cambiar cada vez que se introduce un nuevo tipo de Pokémon. Simplemente creamos una nueva clase que implemente la interfaz Catchable y la pasamos a la Pokeball.

### Ejercicio
- [ ] Crea una nueva clase de Pokémon que implemente la interfaz Catchable.
- [ ] Añade una instancia de tu nuevo Pokémon a una Pokeball y demuestra que puedes llamar al método catchAction() sin modificar la clase Pokeball.

### Tarea 

<details>
  <summary> Haz clic para expandir!</summary>

### Aplicación del Open/Closed Principle al Teleférico de La Paz

### Contexto
La red de teleféricos de La Paz es uno de los sistemas de transporte por cable urbano más extensos del mundo. Cada línea del teleférico conecta diferentes zonas de la ciudad, transportando a los ciudadanos de forma rápida y eficiente por encima del tráfico urbano. A medida que la ciudad crece, también lo hace la necesidad de expandir la red de teleféricos sin perturbar el servicio existente.

### Objetivo
Tu tarea es diseñar un modelo de software orientado a objetos para el sistema de control de las cabinas del teleférico que cumpla con el Open/Closed Principle. Debes permitir que nuevas líneas de teleférico se añadan al sistema sin modificar el código de las líneas ya existentes.

### Especificaciones de la Tarea
- [ ] **Modelar una Clase Base de Teleférico:** Crea una clase abstracta que represente las funcionalidades comunes de una línea de teleférico, como iniciar el recorrido, detenerse en estaciones y finalizar el recorrido.

- [ ] **Implementar Clases Específicas de Línea:** Diseña clases que hereden de la clase base del teleférico y que representen líneas específicas del teleférico de La Paz (por ejemplo, la Línea Roja, la Línea Azul, etc.). Cada una debe ser capaz de operar de forma independiente siguiendo un itinerario específico.

- [ ] **Asegurar la Extensibilidad:** Debe ser posible añadir nuevas líneas al sistema (como la futura Línea Dorada) creando una nueva clase que herede de la clase base sin modificar las clases existentes.

- [ ] **Demostración a Través de Simulación:** Escribe un programa de simulación (main método) que cree instancias de varias líneas de teleférico y las ponga en funcionamiento. La simulación debe demostrar que puedes añadir una nueva línea al sistema sin cambiar el código de las líneas existentes.

</details>