package com.codewithtien.fullstackbackend.controller;

import com.codewithtien.fullstackbackend.exception.DepartmentNotFoundException;
import com.codewithtien.fullstackbackend.model.Department;
import com.codewithtien.fullstackbackend.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping("/department")
    Department newDepartment(@RequestBody Department newDepartment){
        return departmentRepository.save(newDepartment);
    }

    @GetMapping("/departments")
    List<Department> getAllUsers(){
        return departmentRepository.findAll();
    }

    @GetMapping("/department/{id}")
    Department getUserById(@PathVariable long id){
        return departmentRepository.findById((int) id)
                .orElseThrow(()->new DepartmentNotFoundException(id));
    }

    @PutMapping("/department/{id}")
    Department updateUser(@RequestBody Department newDepartment, @PathVariable long id){
        return departmentRepository.findById((int) id)
                .map(department -> {
                    department.setDepartment_name(newDepartment.getDepartment_name());
                    department.setLocation(newDepartment.getLocation());
                    return departmentRepository.save(department);
                }).orElseThrow(()->new DepartmentNotFoundException(id));
    }

    @DeleteMapping("/department/{id}")
    String deleteUser(@PathVariable Long id){
        if(!departmentRepository.existsById(Math.toIntExact(id))){
            throw new DepartmentNotFoundException(id);
        }
        departmentRepository.deleteById(Math.toIntExact(id));
        return "User with id " + id + " has been deleted successfully";
    }
}
