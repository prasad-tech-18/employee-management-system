package com.prasad.emsbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.prasad.emsbackend.Repository.EmployeeRepository;
import com.prasad.emsbackend.entity.Employee;

@Service
public class EmployeeService {

    private final EmployeeRepository empRepository;

    public EmployeeService(EmployeeRepository empRepository) {
        this.empRepository = empRepository;
    }

    // Add Employee
    public Employee addEmployee(Employee emp) {
        return empRepository.save(emp);
    }

    // Get All Employees
    public List<Employee> getAllEmployees() {
        return empRepository.findAll();
    }

    // Get Employee By ID
    public Optional<Employee> getEmployeeById(int id) {
        return empRepository.findById(id);
    }

    // Update Employee
    public Employee updateEmployee(int id, Employee empl) {

        Employee existEmp = empRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found: " + id));

        existEmp.setFname(empl.getFname());
        existEmp.setLname(empl.getLname());
        existEmp.setEmail(empl.getEmail());
        existEmp.setDepartment(empl.getDepartment());
        existEmp.setSalary(empl.getSalary());

        return empRepository.save(existEmp);
    }

    // Delete Employee
    public void deleteEmployee(int id) {

        Employee emp = empRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found: " + id));

        empRepository.delete(emp);
    }
}