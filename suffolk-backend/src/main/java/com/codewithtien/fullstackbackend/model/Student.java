package com.codewithtien.fullstackbackend.model;

import jakarta.persistence.*;

@Entity
    public class Student {
    @Id
    @GeneratedValue
    private long student_id;
    private long advisor_id;
    private String student_name;
    private String student_email;
    private int total_credit;
    private String major;

    public long getStudent_id() {
        return student_id;
    }

    public void setStudent_id(long student_id) {
        this.student_id = student_id;
    }

    public long getAdvisor_id() {
        return advisor_id;
    }

    public void setAdvisor_id(long advisor_id) {
        this.advisor_id = advisor_id;
    }

    public String getStudent_name() {
        return student_name;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

    public String getStudent_email() {
        return student_email;
    }

    public void setStudent_email(String student_email) {
        this.student_email = student_email;
    }

    public int getTotal_credit() {
        return total_credit;
    }

    public void setTotal_credit(int total_credit) {
        this.total_credit = total_credit;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }
}

