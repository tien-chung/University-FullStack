package com.codewithtien.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
    public class Course {
    @Id
    @GeneratedValue
    private long course_id;
    private String title;
    private int credits;
    private String course_department;
    private long dep_id;
    private String professor;

    public long getCourse_id() {
        return course_id;
    }

    public void setCourse_id(long course_id) {
        this.course_id = course_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getCourse_department() {
        return course_department;
    }

    public void setCourse_department(String course_department) {
        this.course_department = course_department;
    }

    public long getDep_id() {
        return dep_id;
    }

    public void setDep_id(long dep_id) {
        this.dep_id = dep_id;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }
}

