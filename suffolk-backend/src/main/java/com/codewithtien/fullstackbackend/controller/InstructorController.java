package com.codewithtien.fullstackbackend.controller;

import com.codewithtien.fullstackbackend.exception.InstructorNotFoundException;
import com.codewithtien.fullstackbackend.model.Instructor;
import com.codewithtien.fullstackbackend.repository.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class InstructorController {
    @Autowired
    private InstructorRepository instructorRepository;

    @PostMapping("/instructor")
    Instructor newInstructor(@RequestBody Instructor newInstructor) {
        return instructorRepository.save(newInstructor);
    }

    @GetMapping("/instructors")
    List<Instructor> getAllInstructors(){
        return instructorRepository.findAll();
    }

    @GetMapping("/instructor/{id}")
    Instructor getInstructorById(@PathVariable long id){
        return instructorRepository.findById(id)
                .orElseThrow(()->new InstructorNotFoundException(id));
    }

    @PutMapping("/instructor/{id}")
    Instructor updateUser(@RequestBody Instructor newInstructor, @PathVariable long id){
        return instructorRepository.findById(id)
                .map(instructor -> {
                    instructor.setInstructor_name(newInstructor.getInstructor_name());
                    instructor.setDept_id(newInstructor.getDept_id());
                    instructor.setInstructor_email(newInstructor.getInstructor_email());
                    return instructorRepository.save(instructor);
                }).orElseThrow(()->new InstructorNotFoundException(id));
    }

    @DeleteMapping("/instructor/{id}")
    String deleteUser(@PathVariable Long id){
        if(!instructorRepository.existsById(id)){
            throw new InstructorNotFoundException(id);
        }
        instructorRepository.deleteById(id);
        return "Instructor with id " + id + " has been deleted successfully";
    }
}

