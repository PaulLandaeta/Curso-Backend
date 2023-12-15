FROM openjdk:17

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} orders.jar

ENTRYPOINT ["java", "-jar", "/orders.jar"]

EXPOSE 8082