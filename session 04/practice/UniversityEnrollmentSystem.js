/**
 * UNIVERSITY ENROLLMENT SYSTEM - PRACTICE EXERCISE
 *
 * This file demonstrates:
 * - Inheritance in JavaScript using class extends
 * - Custom error class creation and handling
 * - Object-oriented programming principles
 * - Class methods and properties
 * - Array methods for data manipulation (reduce, findIndex, splice)
 * - Try-catch error handling
 */

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

/**
 * Custom error class for handling student not found scenarios
 * Extends the native Error class to create a specialized error type
 */
class StudentNotFoundError extends Error {
  /**
   * Create a new StudentNotFoundError instance
   *
   * @param {string} message - The error message to display
   */
  constructor(message) {
    // Call the parent Error constructor with the provided message
    super(message);
    // Set the name property to identify the type of error
    this.name = "StudentNotFoundError";
  }
}

/**
 * Base Person class representing any individual in the university system
 * Contains common properties that will be shared across different types of people
 */
class Person {
  /**
   * Create a new Person instance
   *
   * @param {string} name - The person's name
   * @param {number} age - The person's age
   */
  constructor(name, age) {
    // Initialize person with basic identifying information
    this.name = name;
    this.age = age;
  }
}

/**
 * Student class extending Person with student-specific functionality
 * Inherits name and age properties from Person and adds student-specific features
 */
class Student extends Person {
  /**
   * Create a new Student instance
   *
   * @param {string} name - The student's name (inherited from Person)
   * @param {number} age - The student's age (inherited from Person)
   * @param {string} studentId - The unique identifier for the student
   */
  constructor(name, age, studentId) {
    // Call the parent Person constructor to set name and age
    super(name, age);
    // Add student-specific properties
    this.studentId = studentId;
    // Initialize an empty array to store grade objects
    this.grades = [];
  }

  /**
   * Add a grade for a specific subject
   *
   * @param {string} subject - The name of the subject
   * @param {number} grade - The numeric grade (typically 0-100)
   */
  addGrade(subject, grade) {
    // Add a new grade object to the grades array
    this.grades.push({ subject, grade });
  }

  /**
   * Calculate the student's average grade across all subjects
   *
   * @returns {string} The average grade formatted to two decimal places
   */
  getAverageGrade() {
    // If no grades exist, return 0 to avoid division by zero
    if (this.grades.length === 0) return "0.00";

    // Use reduce to sum all grades in the student's grade array
    const total = this.grades.reduce(
      (acc, gradeObj) => acc + gradeObj.grade,
      0
    );
    // Calculate and return the average, formatted to two decimal places
    return (total / this.grades.length).toFixed(2);
  }
}

/**
 * Course class to manage a collection of students and course operations
 * Handles student enrollment, grade calculations, and student management
 */
class Course {
  /**
   * Create a new Course instance
   *
   * @param {string} courseName - The name of the course
   */
  constructor(courseName) {
    // Initialize the course with a name
    this.courseName = courseName;
    // Create an empty array to store enrolled students
    this.students = [];
  }

  /**
   * Add a student to the course
   *
   * @param {Student} student - The student object to add to the course
   */
  addStudent(student) {
    // Add the student object to the students array
    this.students.push(student);
  }

  /**
   * Remove a student from the course using their studentId
   * Throws StudentNotFoundError if the student isn't enrolled
   *
   * @param {string} studentId - The ID of the student to remove
   * @throws {StudentNotFoundError} If the student is not found in the course
   */
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

  /**
   * Calculate the average grade across all students in the course
   * Logs the result to the console
   *
   * @returns {number} The average grade across all students
   */
  calculateAverageGrade() {
    // If no students are enrolled, return 0 to avoid division by zero
    if (this.students.length === 0) {
      console.log(`No students enrolled in ${this.courseName}`);
      return 0;
    }

    // Use reduce to sum the average grades of all students
    const totalGrades = this.students.reduce(
      (acc, student) => acc + parseFloat(student.getAverageGrade()),
      0
    );
    // Calculate the overall average, formatted to two decimal places
    const average = (totalGrades / this.students.length).toFixed(2);
    // Log the result
    console.log(`Average Grade in ${this.courseName}: ${average}`);

    return parseFloat(average);
  }
}

// =====================================================================
// TEST CODE
// =====================================================================
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
  mathCourse.removeStudent("S103"); // This should throw StudentNotFoundError
} catch (error) {
  // Log the error name and message
  console.log(`${error.name}: ${error.message}`);
}
