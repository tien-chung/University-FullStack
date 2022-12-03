package com.codewithtien.fullstackbackend.exception;

public class DepartmentNotFoundException extends RuntimeException{
    public DepartmentNotFoundException(long id){
        super("Could not found the department with id " + id);
    }
}

