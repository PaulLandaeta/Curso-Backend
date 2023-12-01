package com.upb.projecttwo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_employee")
public class EmployeeEntity {
    @Id
    private String employeId;
    private String name;
    private String lastName;
    private String emailId;
    private String deparmentId;

    public String getEmployeId() {
        return employeId;
    }

    public void setEmployeId(String employeId) {
        this.employeId = employeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getDeparmentId() {
        return deparmentId;
    }

    public void setDeparmentId(String deparmentId) {
        this.deparmentId = deparmentId;
    }
}
