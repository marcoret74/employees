package cl.marco.employees.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.marco.employees.backend.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
