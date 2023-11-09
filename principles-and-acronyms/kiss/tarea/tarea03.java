import java.util.ArrayList;
import java.util.List;

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
                            System.out.println()
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

public class tarea02 {
    public static void main(String[] args) {
        LineaRoja lr = new LineaRoja();
        List<Student> miLista = Arrays.asList(3, 1, 4);
        List<Course> miLista = Arrays.asList(3, 1, 4);
        Student s = new Student();
        Course c = new Course();
        StudentRegistrationSystem srs = new StudentRegistrationSystem();
        srs.registeredStudents(s, c);

    }
}