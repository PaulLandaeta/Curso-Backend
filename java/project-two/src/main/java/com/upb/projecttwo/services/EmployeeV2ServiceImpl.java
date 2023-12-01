package com.upb.projecttwo.services;

import com.upb.projecttwo.entity.EmployeeEntity;
import com.upb.projecttwo.models.Employee;
import com.upb.projecttwo.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeV2ServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee save(Employee employee) {
        if(employee.getEmployeId() == null) {
            employee.setEmployeId(UUID.randomUUID().toString());
        }
        EmployeeEntity entity  = new EmployeeEntity();
        BeanUtils.copyProperties(employee,entity);
        employeeRepository.save(entity);
        // Optional<EmployeeEntity> employee1 = employeeRepository.findById("12313");
        return employee;
    }

    @Override
    public Employee getEmployeeById(String id) {
        return null;
    }

    @Override
    public List<Employee> getEmployees() {
        return null;
    }

    @Override
    public void delete(String id) {

    }
}
