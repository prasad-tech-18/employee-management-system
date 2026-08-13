FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
COPY mvnw.cmd .

RUN chmod +x mvnw

COPY src src

RUN ./mvnw clean package -DskipTests

EXPOSE 9091

ENTRYPOINT ["java", "-jar", "target/ems-backend-0.0.1-SNAPSHOT.jar"]