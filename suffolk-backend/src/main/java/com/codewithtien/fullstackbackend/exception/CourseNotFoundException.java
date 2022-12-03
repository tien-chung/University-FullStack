package com.codewithtien.fullstackbackend.exception;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException(long id) {
        super("Could not found the course with id " + id);
    }
}
