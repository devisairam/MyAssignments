"use strict";
class student {
    studentName;
    course;
    constructor(studentName, course) {
        this.studentName = studentName;
        this.course = course;
    }
    displayDetails() {
        console.log(`Student Name : ${this.studentName}`);
        console.log(`Courses : ${this.course}`);
    }
}
const stud1 = new student("Hari", "Playwright with TypeScript");
stud1.displayDetails();
const stud2 = new student("Ram", "Selenium with Java");
stud2.displayDetails();
