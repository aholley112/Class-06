class Student {
    constructor(name) {
      this.name = name;
      this.grades = [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    computeAverage() {
      if (this.grades.length === 0) {
        return 0;
      }
  
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  }
  
  // Create a student instance
  const student1 = new Student("Amanda");
  
  // Add grades
  student1.addGrade(100);
  student1.addGrade(89);
  student1.addGrade(76);
  
  // Compute and log the average
  const average = student1.computeAverage();
  console.log(`${student1.name}'s Average Grade: ${average}`);

  //arrow functions don't have their own 'this' so they inherit it from the text around it. Regular functions have a dynamically determined 'this.'
  