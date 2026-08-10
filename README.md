# 🇮🇳 Employee Management System

A professional full-stack Employee Management System built using **React, Spring Boot, and MySQL**.

The application provides a modern and responsive interface for managing employee records with complete CRUD operations, form validation, search, pagination, dashboard statistics, toast notifications, loading states, and REST API integration.

---

## 📌 Project Overview

The Employee Management System is a full-stack web application designed to simplify employee record management.

Users can:

- Add new employees
- View all employee records
- View complete employee details
- Update employee information
- Delete employee records
- Search employees
- Navigate through employee records using pagination
- View dynamic employee statistics on the dashboard

The frontend is developed using **React + Vite**, while the backend is implemented using **Spring Boot REST APIs**. Employee data is stored in a **MySQL database**.

---

## ✨ Features

### 👨‍💼 Employee Management

- Add Employee
- View All Employees
- View Employee Details
- Update Employee
- Delete Employee
- Complete CRUD functionality

### 🔎 Search & Navigation

- Real-time employee search
- Employee pagination
- View individual employee details
- Recent employees displayed on dashboard

### 📊 Dashboard

- Total number of employees
- Total number of departments
- Average employee salary
- Recent employee list
- Quick action buttons

### ✅ Form Validation

- First name validation
- Last name validation
- Email format validation
- Department validation
- Salary validation

### 🔔 User Experience

- Toast notifications
- Loading indicators
- Error handling
- Responsive design
- Mobile-friendly navigation
- Indian tricolor inspired UI theme 🇮🇳

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Bootstrap
- React Icons
- React Toastify
- JavaScript

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API
- Maven

### Database

- MySQL

### Development Tools

- Eclipse / Spring Tool Suite
- Visual Studio Code
- Git
- GitHub
- Postman

---

## 🏗️ Application Architecture

```text
                    Employee Management System
                              │
                ┌─────────────┴─────────────┐
                │                           │
             Frontend                    Backend
          React + Vite                 Spring Boot
                │                           │
             Axios                    REST Controller
                │                           │
                └──────── HTTP ─────────────┘
                                            │
                                      Service Layer
                                            │
                                     Repository Layer
                                            │
                                      JPA / Hibernate
                                            │
                                          MySQL


## Project Structure

employee-management-system/
│
├── README.md
├── .gitignore
│
├── ems-backend/
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/prasad/emsbackend/
│   │   │   │       ├── controller/
│   │   │   │       ├── entity/
│   │   │   │       ├── Repository/
│   │   │   │       └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   └── test/
│   │
│   └── .gitignore
│
└── ems-frontend/
    ├── package.json
    ├── vite.config.js
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    └── .gitignore


## REST API Endpoints

http://localhost:9091/api/employees

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| POST   | `/api/employees`      | Add employee       |
| GET    | `/api/employees`      | Get all employees  |
| GET    | `/api/employees/{id}` | Get employee by ID |
| PUT    | `/api/employees/{id}` | Update employee    |
| DELETE | `/api/employees/{id}` | Delete employee    |


## Database

| Field      | Type    |
| ---------- | ------- |
| id         | Integer |
| fname      | String  |
| lname      | String  |
| email      | String  |
| department | String  |
| salary     | Double  |

## Configuration
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password


## How to run the project

git clone https://github.com/prasad-tech-18/employee-management-system.git
cd employee-management-system

CREATE DATABASE ems;

cd ems-backend

mvn spring-boot:run

http://localhost:9091

http://localhost:9091/api/employees

cd ems-frontend

npm install

npm run dev

http://localhost:5173


## API Testing

POST    → Create Employee
GET     → Get Employees
GET     → Get Employee By ID
PUT     → Update Employee
DELETE  → Delete Employee


##📱 Responsive Design

The application is designed to work across:

Desktop
Laptop
Tablet
Mobile devices

The navigation menu adapts to smaller screen sizes using a responsive Bootstrap navbar.

##🔐 Security & Configuration

The project follows basic configuration security practices:

Database credentials are separated from source code.
Environment variables are used for sensitive database credentials.
.gitignore prevents unnecessary and sensitive files from being committed.
Build artifacts and dependency folders are excluded from Git.


##🔮 Future Enhancements

Possible future improvements include:

User authentication and authorization
Role-based access control
Employee profile images
Advanced employee filtering
Department management
Export employee data to Excel/PDF
Advanced dashboard charts
Cloud deployment
Global exception handling
Backend-level validation
Production database configuration


##👨‍💻 Developer

Prasad Gaikwad

Full-Stack Java Project

Technologies

Java | Spring Boot | React | MySQL | REST API
