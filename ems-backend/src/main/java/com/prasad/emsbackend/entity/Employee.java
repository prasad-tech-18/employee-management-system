
package com.prasad.emsbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee 
{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String fname;
  private String lname;
  private String email;
  private String department;
  private double salary;
  
  
  public Employee()
  {
	  
  }
  
  public Employee( String fname,String lname,String email, String department, double salary)
  {
	  
	  this.fname = fname;
	  this.lname = lname;
	  this.email = email;
	  this.department = department;
	  this.salary = salary;
	 
  }

  public int getId() {
	return id;
}

  public void setId(int id) {
	this.id = id;
  }

  public String getFname() {
	return fname;
  }

  public void setFname(String fname) {
	this.fname = fname;
  }

  public String getLname() {
	return lname;
  }

  public void setLname(String lname) {
	this.lname = lname;
  }

  public String getEmail() {
	return email;
  }

  public void setEmail(String email) {
	this.email = email;
  }

  public String getDepartment() {
	return department;
  }

  public void setDepartment(String department) {
	this.department = department;
  }

  public double getSalary() {
	return salary;
  }

  public void setSalary(double salary) {
	this.salary = salary;
  }
  
  
}
