import java.util.*;
import java.util.stream.Stream;

class Student {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  private String studentCode;

  public String getStudentCode() {
    return studentCode;
  }

  public void setStudentCode(String studentCode) {
    this.studentCode = studentCode;
  }
}

// En la clase course, se usó la estructura de datos Set, para evitar que se
// vuelvan a insertar estudiantes que ya
// se encuentran registrados en el curso, ya que esta estructura de datos impide
// que se agreguen objetos
// repetidos
class Course {
  private Set<Student> studentsList = new HashSet<>();

  public Set<Student> getStudentsList() {
    return studentsList;
  }

  public void setStudentsList(Set<Student> studentsList) {
    this.studentsList = studentsList;
  }

  private String courseCode;

  public String getCourseCode() {
    return courseCode;
  }

  public void setCourseCode(String courseCode) {
    this.courseCode = courseCode;
  }

  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void addStudents(Student student) {
    studentsList.add(student);
  }
}

class StudentRegistrationSystem {
  private List<Course> availableCourses = new ArrayList<>();

  public List<Course> getAvailableCourses() {
    return availableCourses;
  }

  public void setAvailableCourses(List<Course> availableCourses) {
    this.availableCourses = availableCourses;
  }

  // Colocar la lista de estudiantes registrados, por medio de un set, con el fin
  // de evitar que se registren
  // estudiantes ya registrados nuevamente
  private Set<Student> registeredStudents = new HashSet<>();

  public Set<Student> getRegisteredStudents() {
    return registeredStudents;
  }

  public void setRegisteredStudents(Set<Student> registeredStudents) {
    this.registeredStudents = registeredStudents;
  }

  public void setNewCourse(Course course) {
    availableCourses.add(course);
  }

  // Utilizando la estructura de datos Set, es posible reducir la complejidad de
  // elaboración de un sistema de
  // registro de estudiantes de la siguiente manera:
  public void registrarEstudiante(Student student, String courseCode) {
    Stream<Course> exist = availableCourses.stream().filter(item -> item.getCourseCode().equals(courseCode));
    // descomentar la condicion inferior, si se requiere verificar si un estudiante
    // se encuentra en un curso por su
    // codigo de estudiante
    boolean extraConditionForAllowInscription = /*
                                                 * exist.filter(course -> course.getStudentsList().stream()
                                                 * .filter(estudiante ->
                                                 * estudiante.getStudentCode().equals(student.getStudentCode())).count()
                                                 * > 0).count() != 0
                                                 * &&
                                                 */true;
    if (exist.count() > 0 && student != null && extraConditionForAllowInscription) {
      availableCourses.forEach(item -> agregarEstudiante(student, item, courseCode));
      registeredStudents.add(student);
    } else {
      System.out.println("El curso o el estudiante no existen!");
    }
  }

  private void agregarEstudiante(Student student, Course course, String courseCode) {
    if (courseCode.equals(course.getCourseCode())) {
      course.addStudents(student);
    }
  }
}

class Main {
  public static void main(String[] args) {
    StudentRegistrationSystem registro = new StudentRegistrationSystem();
    Course cursoMate = new Course();
    cursoMate.setName("curso mate");
    cursoMate.setCourseCode("123");

    Student estudianteUno = new Student();
    estudianteUno.setName("Jose Carrasco");
    estudianteUno.setStudentCode("63003");

    registro.setNewCourse(cursoMate);

    registro.registrarEstudiante(estudianteUno, "123");
    registro.registrarEstudiante(estudianteUno, "123");
    registro.registrarEstudiante(estudianteUno, "123");

    registro.getAvailableCourses().forEach(curso -> curso.getStudentsList().stream()
        .forEach(estudiante -> System.out.println(estudiante.getStudentCode())));
  }
}
