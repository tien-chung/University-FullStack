package com.codewithtien.fullstackbackend.exception;

public class InstructorNotFoundException extends RuntimeException {
    public InstructorNotFoundException(long id) {
        super("Could not found the instructor with id " + id);
    }
}
