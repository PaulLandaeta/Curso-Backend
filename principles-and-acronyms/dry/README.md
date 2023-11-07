# Principio DRY - Don't Repeat Yourself

## ¿Qué es el Principio DRY?

El principio DRY es una directriz fundamental en el desarrollo de software, acuñado por Andy Hunt y Dave Thomas en su libro "The Pragmatic Programmer". El principio sostiene que "Cada pieza de conocimiento debe tener una representación única, inequívoca y autorizada dentro de un sistema". Su aplicación ayuda a reducir la duplicación de código, lo que puede llevar a una menor cantidad de errores, mejor mantenimiento y una mayor reutilización.

## Beneficios del Principio DRY

- **Menos Código Redundante:** Facilita el mantenimiento y la comprensión del código.
- **Menos Errores:** Al no duplicar la lógica, se reduce la posibilidad de inconsistencias y errores.
- **Mayor Reusabilidad:** Promueve la creación de funciones y módulos reutilizables.

## Aplicando DRY en Java

Supongamos que tenemos múltiples funciones que calculan el área de un círculo, pero todas ellas repiten la misma fórmula. Esto viola el principio DRY.

### Ejemplo Violando DRY

```java
public class AreaCalculator {
    public double calculateCircleArea(double radius) {
        return 3.1415 * radius * radius;
    }

    public double calculateSectorArea(double radius, double angle) {
        return (3.1415 * radius * radius * angle) / 360.0;
    }

}
```

Refactorizando para Cumplir con DRY
Podemos refactorizar el código anterior definiendo la fórmula del área de un círculo en un solo lugar.

```java
public class AreaCalculator {
    private static final double PI = Math.PI;

    private double calculateCircleArea(double radius) {
        return PI * Math.pow(radius, 2);
    }

    public double calculateSectorArea(double radius, double angle) {
        return calculateCircleArea(radius) * (angle / 360.0);
    }

}

```

### Consejos para Mantenerse DRY

**Abstraer Lógica Común:** Encapsula la lógica común en funciones o clases.

**Utilizar Herencia y Composición:**  Aprovecha los mecanismos de OOP para reutilizar código.

**Evitar la Copia y Pega:** Es tentador, pero suele ser el inicio de la duplicación de código.


<details>
  <summary> Haz clic para expandir!</summary>

### Refactorización de Código para Aplicar el Principio DRY

### Contexto

Has heredado un proyecto de un sistema de gestión de inventario donde cada tipo de producto tiene su propia clase y método para calcular el stock después de una venta. Las operaciones de cálculo son en realidad idénticas entre los productos, pero se han implementado de manera separada en cada clase, lo que ha llevado a una gran cantidad de código duplicado.

### Objetivo

Tu tarea es refactorizar el código existente para eliminar la duplicación y asegurar que la operación de cálculo de stock se implemente de una manera que siga el principio DRY.

### Codigo 

```java
class Book {
    private int stock;

    public void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println("Libro vendido. Stock actualizado: " + stock);
        } else {
            System.out.println("Stock insuficiente para libros.");
        }
    }
}

class Game {
    private int stock;

    public void sell(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println("Juego vendido. Stock actualizado: " + stock);
        } else {
            System.out.println("Stock insuficiente para juegos.");
        }
    }
}


```
### Especificaciones de la Tarea
- [ ] Identifica la lógica común entre las diferentes clases de productos.

- [ ] Crea un método común o una superclase para encapsular la lógica de cálculo de stock.

- [ ] Asegúrate de que todas las clases de productos utilicen esta nueva estructura sin duplicar el código.

- [ ] El refactor debe permitir la fácil adición de nuevos tipos de productos sin necesidad de reimplementar la lógica de venta.

- [ ] Escribe un pequeño comentario en tu código para explicar cómo aplicaste el principio DRY.

</details>