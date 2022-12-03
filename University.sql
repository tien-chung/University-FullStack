/* 
	Databse Project: university DBMS
    - department(department_name, location)
    - instructor(instructor_id, instructor_name, indtructor_department, instructor_email)
    - student(student_id, advisor_id, student_name, student_email, major)
    - course(course_id, title, credits, course_department, professor)
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

 INSERT INTO instructor (instructor_name, dept_id, instructor_email) VALUES
 ("John Xu", 1, "zxu@suffolk.edu"),
 ("Kayla Schwartz", 2, "kschwartz@suffolk.edu"), 
 ("Andrew Azer", 3, "aazer@suffolk.edu"),
 ("Peter Burn", 4, "pburn@suffolk.edu"), 
 ("Melanie Berkmen", 5, "mberkmen@suffolk.edu"),
 ("Sarah Tang", 6, "ltang7@suffolk.edu"),
 ("Jon Lee", 7, "jdlee@suffolk.edu"), 
 ("Natalia Beliaeva", 8, "nbeliaeva@suffolk.edu"), 
 ("Charles Cramer", 9, "ccramer@suffolk.edu"),
 ("Pelin Bicen", 10, "pbicen@suffolk.edu");
 
 SELECT * from instructor;


INSERT INTO student (advisor_id, student_name, student_email, total_credit, major) VALUES
(1, "Tien Chung", "tchung@suffolk.edu", 120, "Mathematics & Computer Science"),
(2, "Samantha Houston", "shouston@suffolk.edu", 16, "Art"),
(3, "Jaylen Townsend", "jtownsend@suffolk.edu", 100, "Accounting & Business Law"),
(4, "Selena Hunt", "shunt@suffolk.edu", 32, "Biology"),
(5, "TheMinh Luong", "tluong@suffolk.edu", 90, "Chemistry & Biochemistry"),
(6, "Kiley Petty", "kpetty@suffolk.edu", 0, "Economics"),
(7, "Cyrus Chen", "cchen@suffolk.edu", 45, "English"),
(8, "Melissa Hebert", "mhebert@suffolk.edu", 16, "Finance"), 
(9, "Matteo Mcintosh", "mmcintosh@suffolk.edu", 100, "History, Language & Global Culture"), 
(10, "Evie Schroeder", "eschroeder@suffolk.edu", 0, "Marketing") ;

SELECT * from student;

INSERT INTO course (title, credits, course_department, dep_id, professor) VALUES 
("Object Oriented Programming", 4, "Mathematics & Computer Science", 1, "John Xu"), 
("Typography II", 3, "Art", 2, "Kayla Schwartz"), 
("Acct for Decision Making II", 4, "Accounting & Business Law", 3, "Andrew Azer"),
("Biology's Big Questions", 4, "Biology", 4, "Peter Burn"), 
("Biochemistry II", 3, "Chemistry & Biochemistry", 5, "Melanie Berkmen"),
("Applied Statistics", 4, "Economics",6, "Sarah Tang"),
("First-Year Writing II", 4, "English", 7,"Jon Lee"), 
("Economic Analysis for Mgr", 4, "Finance", 8,"Natalia Beliaeva"), 
("Art History II", 4, "History, Language & Global Culture", 9,"Charles Cramer"),
("Advanced Marketing Analytics", 4, "Marketing", 10, "Pelin Bicen");

SELECT * FROM course;
