package com.upb.projecttwo.services;

import com.upb.projecttwo.models.Employee;

public interface EmployeeService {
    Employee save(Employee employee);

    Employee getEmployeeById(String id);
}
