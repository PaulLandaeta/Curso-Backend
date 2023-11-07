# Keep It Simple, Stupid (KISS) Principle

El principio KISS sugiere que los sistemas funcionan mejor si se mantienen simples en lugar de hacerlos complejos. Por tanto, la simplicidad debe ser un objetivo clave en el diseño y la complejidad innecesaria debe evitarse.

## Ejemplo Antes de Aplicar KISS

El siguiente código Java muestra una implementación compleja y difícil de mantener para la asignación de permisos de usuario en función de su rol.

```java
public class RolePermissionHandler {

    public void assignPermission(String role, String permission) {
        if (role.equals("ADMIN")) {
            if (permission.equals("READ")) {
                // Logic to assign read permission to admin
            } else if (permission.equals("WRITE")) {
                // Logic to assign write permission to admin
            } else if (permission.equals("DELETE")) {
                // Logic to assign delete permission to admin
            } else {
                throw new IllegalArgumentException("Invalid permission: " + permission);
            }
        } else if (role.equals("EDITOR")) {
            if (permission.equals("READ") || permission.equals("WRITE")) {
                // Logic to assign read/write permission to editor
            } else {
                throw new IllegalArgumentException("Invalid permission for editor: " + permission);
            }
        } else if (role.equals("VIEWER")) {
            if (permission.equals("READ")) {
                // Logic to assign read permission to viewer
            } else {
                throw new IllegalArgumentException("Invalid permission for viewer: " + permission);
            }
        } else {
            throw new IllegalArgumentException("Invalid role: " + role);
        }
    }
}
```

Este código es propenso a errores y difícil de modificar si necesitamos añadir nuevos roles o permisos.

## Ejemplo Después de Aplicar KISS

Ahora veamos cómo podemos refactorizar el código anterior para hacerlo más simple, manteniendo la misma funcionalidad.

```java
import java.util.*;

public class RolePermissionHandler {
    private final Map<String, Set<String>> rolePermissions = new HashMap<>();

    public RolePermissionHandler() {
        rolePermissions.put("ADMIN", new HashSet<>(Arrays.asList("READ", "WRITE", "DELETE")));
        rolePermissions.put("EDITOR", new HashSet<>(Arrays.asList("READ", "WRITE")));
        rolePermissions.put("VIEWER", new HashSet<>(Collections.singletonList("READ")));
    }

    public void assignPermission(String role, String permission) {
        if (rolePermissions.containsKey(role) && rolePermissions.get(role).contains(permission)) {
            // Logic to assign permission
        } else {
            throw new IllegalArgumentException("Invalid role or permission");
        }
    }
}

```

Con este cambio, el código es más legible y fácil de mantener. Añadir un nuevo rol o permiso es tan simple como actualizar el mapa rolePermissions.

### Tarea 

<details>
  <summary> Haz clic para expandir!</summary>

### Simplificar un Sistema de Registro de Estudiantes

### Contexto

Se te ha proporcionado un sistema de registro de estudiantes que actualmente es muy complejo y propenso a errores. La implementación actual utiliza una serie de bucles anidados y estructuras condicionales complicadas para registrar estudiantes en cursos y asignarles grados.

### Objetivo

Tu tarea es refactorizar el código para simplificar la lógica de registro de estudiantes y la asignación de grados siguiendo el principio KISS. Debes asegurarte de que la funcionalidad final sea la misma, pero el proceso para llegar a ella debe ser más simple y directo..

### Codigo 

```java
class StudentRegistrationSystem {
    
    List<Student> registeredStudents = new ArrayList<>();
    List<Course> availableCourses = new ArrayList<>();

    boolean registerStudent(Student student, Course course) {
        if (student != null && course != null) {
            if (!registeredStudents.contains(student)) {
                if (availableCourses.contains(course)) {
                    for (Course c : student.getCourses()) {
                        if (c.equals(course)) {
                            // El estudiante ya está registrado en el curso
                            return false;
                        }
                    }
                    // Lógica de registro
                    student.getCourses().add(course);
                    registeredStudents.add(student);
                    return true;
                } else {
                    // Curso no disponible
                    return false;
                }
            } else {
                // El estudiante ya está registrado
                return false;
            }
        } else {
            // Datos nulos
            throw new IllegalArgumentException("Estudiante o curso no pueden ser nulos");
        }
    }
}

```
### Especificaciones de la Tarea
- [ ] Analiza el código proporcionado y haz una lista de todas las complejidades innecesarias que encuentres.

- [ ] Diseña una solución simplificada que elimine la complejidad innecesaria pero mantenga la funcionalidad.

- [ ] Refactoriza el código implementando tu diseño simplificado.

- [ ] Documenta cualquier suposición que hagas durante el proceso de refactorización

</details>