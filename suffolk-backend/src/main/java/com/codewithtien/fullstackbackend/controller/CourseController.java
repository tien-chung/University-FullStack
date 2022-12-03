package com.codewithtien.fullstackbackend.controller;

import com.codewithtien.fullstackbackend.exception.CourseNotFoundException;
import com.codewithtien.fullstackbackend.model.Course;
import com.codewithtien.fullstackbackend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/course")
    Course newCourse(@RequestBody Course newCourse) {
        return courseRepository.save(newCourse);
    }

    @GetMapping("/courses")
    List<Course> getAllCourses(){
        return courseRepository.findAll();
    }

    @GetMapping("/course/{id}")
    Course getCourseById(@PathVariable long id){
        return courseRepository.findById(id)
                .orElseThrow(()->new CourseNotFoundException(id));
    }

    @PutMapping("/course/{id}")
    Course updateUser(@RequestBody Course newCourse, @PathVariable long id){
        return courseRepository.findById(id)
                .map(course -> {
                    course.setTitle(newCourse.getTitle());
                    course.setCredits(newCourse.getCredits());
                    course.setCourse_department(newCourse.getCourse_department());
                    course.setDep_id(newCourse.getDep_id());
                    course.setProfessor(newCourse.getProfessor());
                    return courseRepository.save(course);
                }).orElseThrow(()->new CourseNotFoundException(id));
    }

    @DeleteMapping("/course/{id}")
    String deleteUser(@PathVariable Long id){
        if(!courseRepository.existsById(id)){
            throw new CourseNotFoundException(id);
        }
        courseRepository.deleteById(id);
        return "Course with id " + id + " has been deleted successfully";
    }
}

