package com.prasad.emsbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prasad.emsbackend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>
{
  
}
