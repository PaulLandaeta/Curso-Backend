# Principio de Sustitución de Liskov (LSP)

## Introducción

El Principio de Sustitución de Liskov es uno de los cinco principios SOLID del diseño orientado a objetos. Establece que objetos de una superclase deben poder ser reemplazados con objetos de una subclase sin afectar la corrección del programa.

## Ejemplo

Imagina un programa simple donde los entrenadores Pokémon pueden usar diferentes tipos de Pokébolas para atrapar Pokémons. Para adherir al LSP, deberíamos ser capaces de reemplazar cualquier `Pokeball` con una subclase de `Pokeball` (como `GreatBall` o `UltraBall`) sin cambiar el comportamiento esperado de atrapar Pokémon.

### Ejemplo de Violación

Aquí hay un ejemplo donde se viola el LSP:

```java
class Pokeball {
    public void catchPokemon(Pokemon pokemon) {
        System.out.println("¡Atrapaste a " + pokemon.getName() + "!");
    }
}

class MasterBall extends Pokeball {
    @Override
    public void catchPokemon(Pokemon pokemon) {
        if (pokemon.isLegendary()) {
            System.out.println("¡Atrapaste a " + pokemon.getName() + " con MasterBall!");
        } else {
            throw new IllegalArgumentException("¡MasterBall solo puede atrapar Pokémon legendarios!");
        }
    }
}
```
Usar una MasterBall en lugar de una Pokeball podría lanzar una excepción, lo cual no es un comportamiento esperado y por lo tanto viola el LSP.

### Ejemplo Cumpliendo con LSP

Ahora, refactorizamos el código para cumplir con el LSP:

```java 
class Pokeball {
    public boolean catchPokemon(Pokemon pokemon) {
        System.out.println("¡Atrapaste a " + pokemon.getName() + "!");
        return true;
    }
}

class MasterBall extends Pokeball {
    @Override
    public boolean catchPokemon(Pokemon pokemon) {
        // MasterBall puede atrapar cualquier Pokémon sin fallar
        System.out.println("¡Atrapaste a " + pokemon.getName() + " con MasterBall!");
        return true;
    }
}

```

En esta versión refactorizada, la MasterBall puede ser utilizada dondequiera que se espera una Pokeball, sin lanzar excepciones o alterar el comportamiento esperado.

## Ejercicios 

### Refactorizar el Código de Pokébolas

Imagina que tienes la siguiente jerarquía de clases de Pokébolas, donde cada una tiene un método para intentar atrapar un Pokémon. Tu tarea es refactorizar el código para que cumpla con el Principio de Sustitución de Liskov (LSP), asegurando que no se lancen excepciones inesperadas y que se pueda utilizar una subclase en cualquier lugar donde se espere una instancia de la superclase.

### Código Inicial

```java
class Pokeball {
    public void catchPokemon(Pokemon pokemon) {
        System.out.println("Intentas atrapar a " + pokemon.getName());
        // Implementación básica para atrapar Pokémon
    }
}

class GreatBall extends Pokeball {
    @Override
    public void catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.5) {
            System.out.println(pokemon.getName() + " fue atrapado con una GreatBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la GreatBall.");
        }
    }
}

class UltraBall extends Pokeball {
    @Override
    public void catchPokemon(Pokemon pokemon) {
        if (pokemon.getEscapeProbability() < 0.2) {
            System.out.println(pokemon.getName() + " fue atrapado con una UltraBall!");
        } else {
            System.out.println(pokemon.getName() + " escapó de la UltraBall.");
        }
    }
}
```