package com.codewithtien.fullstackbackend.repository;

import com.codewithtien.fullstackbackend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {


}
