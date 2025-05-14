// QUESTION:
// =========
// Problem 2: University Enrollment System with Inheritance and Error Handling
//
// Requirements:
// 1. Implement a base Person class with properties:
//    - name
//    - age
//
// 2. Implement a Student class that inherits from Person and includes:
//    - studentId
//    - grades (array of grade objects)
//
// 3. Implement a Course class with properties:
//    - courseName
//    - students (array of Student objects)
//
// 4. Implement methods in Course to:
//    - Add a student to the course
//    - Calculate the average grade of the course
//    - Handle a custom error StudentNotFoundError if attempting to remove a non-existent student

// Custom error class for handling cases when a student isn't found
// Extends the built-in Error class to provide specific error handling
class StudentNotFoundError extends Error {
  constructor(message) {
    // Call the parent Error constructor with the provided message
    super(message);
    // Set the name property to identify the type of error
    this.name = "StudentNotFoundError";
  }
}

// Base Person class that will be inherited by the Student class
// Contains common properties for any person in the university system
class Person {
  constructor(name, age) {
    // Initialize person with basic identifying information
    this.name = name;
    this.age = age;
  }
}

// Student class extends the Person class to inherit name and age properties
// Adds student-specific properties and methods
class Student extends Person {
  constructor(name, age, studentId) {
    // Call the parent Person constructor to set name and age
    super(name, age);
    // Add student-specific properties
    this.studentId = studentId;
    // Initialize an empty array to store grade objects
    this.grades = [];
  }

  // Method to add a grade for a specific subject
  addGrade(subject, grade) {
    // Add a new grade object to the grades array
    this.grades.push({ subject, grade });
  }

  // Method to calculate the student's average grade across all subjects
  getAverageGrade() {
    // Use reduce to sum all grades in the student's grade array
    const total = this.grades.reduce(
      (acc, gradeObj) => acc + gradeObj.grade,
      0
    );
    // Calculate and return the average, formatted to two decimal places
    return (total / this.grades.length).toFixed(2);
  }
}

// Course class to manage a collection of students and course-related operations
class Course {
  constructor(courseName) {
    // Initialize the course with a name
    this.courseName = courseName;
    // Create an empty array to store enrolled students
    this.students = [];
  }

  // Method to add a student to the course
  addStudent(student) {
    // Add the student object to the students array
    this.students.push(student);
  }

  // Method to remove a student from the course using their studentId
  removeStudent(studentId) {
    // Find the index of the student in the students array
    const index = this.students.findIndex((s) => s.studentId === studentId);
    // If student isn't found (index is -1), throw the custom error
    if (index === -1) {
      throw new StudentNotFoundError(`Student with ID ${studentId} not found.`);
    }

    // Remove the student from the array using splice
    this.students.splice(index, 1);
  }

  // Method to calculate the average grade across all students in the course
  calculateAverageGrade() {
    // Use reduce to sum the average grades of all students
    const totalGrades = this.students.reduce(
      (acc, student) => acc + parseFloat(student.getAverageGrade()),
      0
    );
    // Calculate the overall average, formatted to two decimal places
    const average = (totalGrades / this.students.length).toFixed(2);
    // Log the result
    console.log(`Average Grade in ${this.courseName}: ${average}`);
  }
}

// Test code to demonstrate the University Enrollment System functionality
// Create student instances
const student1 = new Student("Alice", 20, "S101");
// Add grades for the first student
student1.addGrade("Math", 85);
student1.addGrade("Science", 90);

// Create another student instance
const student2 = new Student("Bob", 21, "S102");
// Add grades for the second student
student2.addGrade("Math", 78);
student2.addGrade("Science", 88);

// Create a Mathematics course
const mathCourse = new Course("Mathematics");
// Add both students to the course
mathCourse.addStudent(student1);
mathCourse.addStudent(student2);

// Calculate and display the average grade for the course
mathCourse.calculateAverageGrade();

// Test error handling by attempting to remove a non-existent student
try {
  mathCourse.removeStudent("S103");
} catch (error) {
  // Log the error name and message
  console.log(`${error.name}: ${error.message}`);
}
