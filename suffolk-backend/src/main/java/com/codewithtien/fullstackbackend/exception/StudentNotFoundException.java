package com.codewithtien.fullstackbackend.exception;

public class StudentNotFoundException extends RuntimeException {
    public StudentNotFoundException(long id) {
        super("Could not found the student with id " + id);
    }
}
