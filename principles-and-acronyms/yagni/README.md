# Principio YAGNI - No lo vas a necesitar

## ¿Qué es YAGNI?

YAGNI es un principio del desarrollo ágil que sugiere que los desarrolladores solo deben implementar características cuando son necesarias. La intención es evitar el trabajo innecesario y centrarse en lo que realmente se requiere en el momento presente.

## ¿Por qué es importante?

La adherencia a YAGNI puede:

- **Reducir la Complejidad:** Evitando agregar características innecesarias, se mantiene el código más simple y claro.
- **Incrementar la Productividad:** Los desarrolladores pueden centrarse en lo que se necesita ahora, en lugar de distraerse con suposiciones a futuro.
- **Minimizar los Riesgos:** Características adicionales pueden introducir bugs y complejidad no prevista en el sistema.

## Ejemplo de YAGNI en Java

### Ejemplo Excesivo (No YAGNI)

Imagina que estás construyendo una clase `Car` para un sistema de gestión de vehículos, pero decides agregar métodos que todavía no han sido requeridos, como `enableAutopilot` o `activateFlightMode`.

```java
class Car {
    public void drive() {
        // Implementación de conducción
    }

    public void enableAutopilot() {
        // Implementación de piloto automático
        // No requerida por el cliente todavía
    }

    public void activateFlightMode() {
        // Implementación del modo de vuelo
        // Especulativo y fuera del alcance actual
    }
}
```

## Refactorizado (Aplicando YAGNI)

Ahora, refactoremos la clase Car para adherir al principio YAGNI, eliminando métodos que no son necesarios de acuerdo a los requerimientos actuales.

```java 
class Car {
    public void drive() {
        // Implementación de conducción
        // Sólo incluimos lo que es necesario ahora
    }
}

```
### Referencias
Martin Fowler en YAGNI: [You Aren't Gonna Need It](https://martinfowler.com/bliki/Yagni.html)