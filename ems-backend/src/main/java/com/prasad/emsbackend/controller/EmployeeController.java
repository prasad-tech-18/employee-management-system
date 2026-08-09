package com.prasad.emsbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

import com.prasad.emsbackend.entity.Employee;
import com.prasad.emsbackend.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController 
{
 private final EmployeeService emplserv;
 
 public EmployeeController(EmployeeService emplserv)
 {
	 this.emplserv = emplserv;
 }
 
 @PostMapping
 public Employee addEmployee(@RequestBody Employee emp)
 {
	 return emplserv.addEmployee(emp);
 }
 
 @GetMapping
 public List<Employee> getAllEmployees() {
     return emplserv.getAllEmployees();
 }
 
 @GetMapping("/{id}")
 public Optional<Employee> getEmployeeById(@PathVariable int id)
 {
	 return emplserv.getEmployeeById(id);
 }
 
 @PutMapping("/{id}")
 public Employee updateEmployee(@PathVariable int id,
                                @RequestBody Employee employee) {
     return emplserv.updateEmployee(id, employee);
 }
 
 @DeleteMapping("/{id}")
 public String deleteEmployee(@PathVariable int id) {
     emplserv.deleteEmployee(id);
     return "Employee deleted successfully.";
 }
 
 
}
