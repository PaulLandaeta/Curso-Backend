package com.upb.projecttwo.services;

import com.upb.projecttwo.error.EmployeeNotFoundException;
import com.upb.projecttwo.models.Employee;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    List<Employee> employeeList = new ArrayList<>();

    @Override
    public Employee save(Employee employee) {
        if(employee.getEmployeId() == null) {
            employee.setEmployeId(UUID.randomUUID().toString());
        }
        employeeList.add(employee);
        return employee;
    }

    @Override
    public Employee getEmployeeById(String id) {
        return employeeList
                .stream()
                .filter(employee -> employee.getEmployeId().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID "+id));
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeList;
    }

    @Override
    public void delete(String id) {
        Employee employeeDeleted = employeeList
                    .stream()
                    .filter(employee -> employee.getEmployeId().equalsIgnoreCase(id))
                    .findFirst()
                    .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID "+id));
        employeeList.remove(employeeDeleted);
    }


}
