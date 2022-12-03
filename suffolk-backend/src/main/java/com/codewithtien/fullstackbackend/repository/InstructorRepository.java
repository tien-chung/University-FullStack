package com.codewithtien.fullstackbackend.repository;

import com.codewithtien.fullstackbackend.model.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructorRepository extends JpaRepository<Instructor, Long> {
}
