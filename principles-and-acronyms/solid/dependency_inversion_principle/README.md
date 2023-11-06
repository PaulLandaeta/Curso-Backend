# Dependency Inversion Principle (DIP)

## Introducción al DIP

El Principio de Inversión de Dependencias (DIP) es uno de los cinco principios SOLID de la programación orientada a objetos. Este principio afirma que:

1. Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
2. Las abstracciones no deben depender de los detalles. Los detalles deben depender de abstracciones.

En otras palabras, este principio nos dirige a acoplar nuestro código a interfaces o clases abstractas en lugar de a clases concretas.

## Problema con el Código Existente

Supongamos que tenemos un sistema en el que los Pokémon pueden realizar ataques, y tenemos una clase concreta que representa un Entrenador de Pokémon que utiliza directamente una clase concreta de `Pikachu`:

```java
class Pikachu {
    void electricAttack() {
        System.out.println("Pikachu usa Ataque Eléctrico!");
    }
}

class PokemonTrainer {
    private Pikachu pikachu;

    public PokemonTrainer() {
        this.pikachu = new Pikachu();
    }

    void commandToAttack() {
        pikachu.electricAttack();
    }
}
```
Este diseño viola el DIP, ya que el PokemonTrainer está directamente dependiente de la clase concreta Pikachu.

Aplicando el DIP
Para cumplir con el DIP, podemos introducir una abstracción (interfaz) para los ataques de Pokémon que el entrenador puede usar, y luego inyectar una implementación de esa interfaz en la clase PokemonTrainer.

```java 
interface PokemonAttack {
    void execute();
}

class Pikachu implements PokemonAttack {
    public void execute() {
        electricAttack();
    }

    private void electricAttack() {
        System.out.println("Pikachu usa Ataque Eléctrico!");
    }
}

class PokemonTrainer {
    private PokemonAttack attackStrategy;

    public PokemonTrainer(PokemonAttack attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    void commandToAttack() {
        attackStrategy.execute();
    }
}

```

Ahora, el PokemonTrainer no depende de un Pikachu concreto, sino de una abstracción PokemonAttack, lo cual hace que el código sea más flexible y extensible. Si queremos cambiar a un Charmander, solo necesitamos proporcionar una implementación diferente de PokemonAttack.

### Ejercicios
- [ ] Crea una nueva clase Charmander que implemente PokemonAttack y modifica el entrenador para usarla.
- [ ] Piensa en cómo podrías usar el DIP para manejar múltiples tipos de ataques o estrategias de batalla para los Pokémon.
