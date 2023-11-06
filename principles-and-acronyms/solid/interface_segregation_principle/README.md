# Interface Segregation Principle (ISP)

## Introducción al ISP

El Principio de Segregación de Interfaces (ISP) establece que ningún cliente debería ser forzado a depender de métodos que no utiliza. Esto significa que las interfaces grandes y monolíticas deben dividirse en interfaces más pequeñas y específicas para que las implementaciones de las clases solo necesiten conocer los métodos que son de interés para su uso.

## Problema con el Código Existente

Imaginemos que tenemos una interfaz `Pokemon` que declara métodos para diversas acciones que pueden realizar los Pokémon, tales como `attack()`, `defend()`, `run()`, y `heal()`. No todos los Pokémon pueden realizar todas estas acciones. Por ejemplo, algunos Pokémon no tienen habilidades de curación.

Si usamos una interfaz monolítica, tendríamos algo como esto:

```java
interface Pokemon {
    void attack();
    void defend();
    void run();
    void heal();
}

class Pikachu implements Pokemon {
    public void attack() {
        // Pikachu ataca
    }

    public void defend() {
        // Pikachu se defiende
    }

    public void run() {
        // Pikachu escapa
    }

    public void heal() {
        // Este método no tiene sentido para Pikachu
        throw new UnsupportedOperationException("Pikachu no puede curar.");
    }
}
```

Este enfoque viola el ISP ya que Pikachu está forzado a implementar heal() aunque no lo necesite.

Aplicando el ISP
Para cumplir con el ISP, debemos segregar la interfaz Pokemon en interfaces más pequeñas y específicas.

```java

interface Attackable {
    void attack();
}

interface Defendable {
    void defend();
}

interface Runnable {
    void run();
}

interface Healable {
    void heal();
}

class Pikachu implements Attackable, Defendable, Runnable {
    public void attack() {
        // Pikachu ataca
    }

    public void defend() {
        // Pikachu se defiende
    }

    public void run() {
        // Pikachu escapa
    }

    // No se implementa Healable ya que Pikachu no puede curar
}
```

Ahora, Pikachu solo implementa las interfaces que necesita, y no estamos forzando la dependencia de métodos innecesarios.