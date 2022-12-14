/* 
	Databse Project: university DBMS
    - department(id, department_name, location)
    - instructor(instructor_id, instructor_name, dept_id, instructor_email)
    - student(student_id, advisor_id, student_name, student_email, total_credit, major)
    - course(course_id, title, credits, course_department, dep_id professor)
*/

DROP DATABASE IF EXISTS university;
CREATE DATABASE university DEFAULT CHARACTER SET=utf8;
USE university;

DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS instructor;
DROP TABLE IF EXISTS department;

-- Create tables for university schema
 CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(250) NOT NULL, 
    location VARCHAR(250) NOT NULL, 
    PRIMARY KEY (id),
    UNIQUE KEY (department_name)
); 

CREATE TABLE instructor (
	instructor_id INT NOT NULL AUTO_INCREMENT, 
    instructor_name VARCHAR(250) NOT NULL, 
    dept_id INT NOT NULL,
    instructor_email VARCHAR(250) NOT NULL,
	FOREIGN KEY (dept_id) REFERENCES department (id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (instructor_id),
    UNIQUE KEY (instructor_name)
); 

CREATE TABLE student (
	student_id INT NOT NULL AUTO_INCREMENT,
	advisor_id INT DEFAULT NULL,
	student_name VARCHAR(250) NOT NULL,
    student_email VARCHAR(250) NOT NULL,
	total_credit INT NOT NULL,
    major VARCHAR(250) NOT NULL,
    FOREIGN KEY (advisor_id) REFERENCES instructor (instructor_id)
    ON UPDATE CASCADE ON DELETE RESTRICT, 
    FOREIGN KEY (major) REFERENCES department (department_name) 
    ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (student_id)
); 

CREATE TABLE course (
	course_id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(250) NOT NULL, 
    credits int NOT NULL DEFAULT 0, 
    course_department VARCHAR(250) NOT NULL, 
	dep_id INT NOT NULL,
    professor VARCHAR(250) NOT NULL,
    FOREIGN KEY (professor) REFERENCES instructor (instructor_name)
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (course_department) REFERENCES department (department_name) 
    ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (dep_id) REFERENCES department (id) 
    ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (course_id)
);

-- Inserting data into tables
INSERT INTO department (department_name, location) VALUES
("Mathematics & Computer Science", "Stahl Floor 8"), 
("Art", "Sawyer Floor 6"), 
("Accounting & Business Law", "Sargent Floor 5"), 
("Biology", "Samia Floor 6"), 
("Chemistry & Biochemistry", "Samia Floor 8"), 
("Economics", "Stahl Floor 10"),
("English", "Stahl Floor 8"),
("Finance", "Stahl Floor 11"),
("History, Language & Global Culture", "Stahl Floor 10"),
("Marketing", "Stahl Floor 11"); 
 
 Select * from department;

-- Random Instructor names
 INSERT INTO instructor (instructor_name, dept_id, instructor_email) VALUES
 ("Ben Copeland", 1, "Ben@gmail.com"),
 ("Joseph Reynolds", 2, "Joseph@gmail.com"), 
 ("Christine Terry", 3, "Christine@gmail.com"),
 ("Horace Johnson", 4, "Horace@gmail.com"), 
 ("Kelley Coleman", 5, "Kelley@gmail.com"),
 ("Leland Santos", 6, "Leland@gmail.com"),
 ("Glenda Vaughn", 7, "Glenda@gmail.com"), 
 ("Jim Rui", 8, "Jim@gmail.com"), 
 ("John Smith", 9, "John@gmail.com"),
 ("Kristen Carroll", 10, "Kristen@gmail.com");
 
 SELECT * from instructor;

-- Random Student names
INSERT INTO student (advisor_id, student_name, student_email, total_credit, major) VALUES
(1, "Tien Tran", "ttran@gmail.com", 120, "Mathematics & Computer Science"),
(2, "Samantha Houston", "shouston@gmail.com", 16, "Art"),
(3, "Jaylen Townsend", "jtownsend@gmail.com", 100, "Accounting & Business Law"),
(4, "Selena Hunt", "shunt@gmail.com", 32, "Biology"),
(5, "TheMinh Pham", "tpham@gmail.com", 90, "Chemistry & Biochemistry"),
(6, "Kiley Petty", "kpetty@gmail.com", 0, "Economics"),
(7, "Cyrus Chen", "cchen@gmail.com", 45, "English"),
(8, "Melissa Hebert", "mhebert@gmail.com", 16, "Finance"), 
(9, "Matteo Mcintosh", "mmcintosh@gmail.com", 100, "History, Language & Global Culture"), 
(10, "Evie Schroeder", "eschroeder@gmail.com", 0, "Marketing") ;

SELECT * from student;

INSERT INTO course (title, credits, course_department, dep_id, professor) VALUES 
("Object Oriented Programming", 4, "Mathematics & Computer Science", 1, "Ben Copeland"), 
("Typography II", 3, "Art", 2, "Joseph Reynolds"), 
("Acct for Decision Making II", 4, "Accounting & Business Law", 3, "Christine Terry"),
("Biology's Big Questions", 4, "Biology", 4, "Horace Johnson"), 
("Biochemistry II", 3, "Chemistry & Biochemistry", 5, "Kelley Coleman"),
("Applied Statistics", 4, "Economics",6, "Leland Santos"),
("First-Year Writing II", 4, "English", 7,"Glenda Vaughn"), 
("Economic Analysis for Mgr", 4, "Finance", 8,"Jim Rui"), 
("Art History II", 4, "History, Language & Global Culture", 9,"John Smith"),
("Advanced Marketing Analytics", 4, "Marketing", 10, "Kristen Carroll");

SELECT * FROM course;
