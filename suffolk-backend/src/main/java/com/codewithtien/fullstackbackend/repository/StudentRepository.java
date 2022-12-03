package com.codewithtien.fullstackbackend.repository;

import com.codewithtien.fullstackbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
