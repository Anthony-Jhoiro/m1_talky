FROM maven:3.8.4-openjdk-17 AS builder

ARG MODULE=""

WORKDIR build


COPY . .

RUN mvn install -DskipTests
RUN mvn package -DskipTests -pl config-server

RUN cp config-server/target/config-server-*.jar /build/app.jar

FROM openjdk:17-jdk-alpine

WORKDIR /app

RUN apk add curl

COPY --from=builder /build/app.jar /app

RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

ENTRYPOINT ["java","-jar","/app/app.jar"]



