package com.codewithtien.fullstackbackend.controller;

import com.codewithtien.fullstackbackend.model.Instructor;
import com.codewithtien.fullstackbackend.repository.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class InstructorController {
    @Autowired
    private InstructorRepository instructorRepository;

    @PostMapping("/instructor")
    Instructor newInstructor(@RequestBody Instructor newInstructor) {
        return instructorRepository.save(newInstructor);
    }
}

