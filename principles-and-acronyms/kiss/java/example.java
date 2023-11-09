import java.security.PublicKey;
import java.util.ArrayList;
import java.util.List;

class Student {
    private String name;
    private List<Course> courses = new ArrayList<>();

    public List<Course> getCourses() {
        return courses;
    }

}

class Course {
    private String title;

}

class StudentRegistrationSystem {

    List<Student> registeredStudents = new ArrayList<>();
    List<Course> availableCourses = new ArrayList<>();

    /*boolean registerStudent(Student student, Course course) {                 // 1. Varios ifs anidados
        if (student != null && course != null) {                                
            if (!registeredStudents.contains(student)) {
                if (availableCourses.contains(course)) {
                    for (Course c : student.getCourses()) {                     // 2. Se usa un for para buscar en una lista
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
                    return false;                                               // 3. repeticiones de casos de falla
                }
            } else {
                // El estudiante ya está registrado
                return false;
            }
        } else {
            // Datos nulos
            throw new IllegalArgumentException("Estudiante o curso no pueden ser nulos");
        }
    }*/

    boolean registerStudent2(Student student, Course course) {
        verifyNulls(student, course);

        if (isPossibleRegister(student, course)) {
            student.getCourses().add(course);
            registeredStudents.add(student);
            return true;
        } else {
            return false;
        }
    }

    boolean isPossibleRegister(Student student, Course course){
        return !isRegistered(student) && isAvailable(course) && !isIntheCourse(student, course);
    }

    boolean isRegistered(Student student) {
        return registeredStudents.contains(student);
    }

    boolean isAvailable(Course course) {
        return availableCourses.contains(course);
    }

    boolean isIntheCourse(Student student, Course course) {
        return student.getCourses().contains(course);
    }

    void verifyNulls(Student student, Course course) {
        if (student == null || course == null) {
            throw new IllegalArgumentException("Estudiante o curso no pueden ser nulos");
        }
    }
}

class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        Course c1 = new Course();

        StudentRegistrationSystem studentRegistrationSystem = new StudentRegistrationSystem();
        studentRegistrationSystem.availableCourses.add(c1);
        boolean status1 = studentRegistrationSystem.registerStudent2(s1, c1);
        boolean status2 = studentRegistrationSystem.registerStudent2(s1, c1);
        System.out.println(status1 + " " + status2);


        

    }
}