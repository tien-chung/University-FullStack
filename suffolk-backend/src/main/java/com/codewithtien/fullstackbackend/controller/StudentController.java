package com.codewithtien.fullstackbackend.controller;

import com.codewithtien.fullstackbackend.exception.StudentNotFoundException;
import com.codewithtien.fullstackbackend.model.Student;
import com.codewithtien.fullstackbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    Student newStudent(@RequestBody Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable long id){
        return studentRepository.findById(id)
                .orElseThrow(()->new StudentNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateUser(@RequestBody Student newStudent, @PathVariable long id){
        return studentRepository.findById(id)
                .map(student -> {
                    student.setAdvisor_id(newStudent.getAdvisor_id());
                    student.setStudent_name(newStudent.getStudent_name());
                    student.setStudent_email(newStudent.getStudent_email());
                    student.setTotal_credit(newStudent.getTotal_credit());
                    student.setMajor(newStudent.getMajor());
                    return studentRepository.save(student);
                }).orElseThrow(()->new StudentNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteUser(@PathVariable Long id){
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "Student with id " + id + " has been deleted successfully";
    }
}

