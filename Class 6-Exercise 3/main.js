//Modify your Person class. The constructor should now accept and initialize name and age properties.
//Create two different Person instances with unique names and ages.

class Person {
  constructor(name, age,) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);

  };
};

//Instantiate two different Person objects and invoke their greet methods.

const person1 = new Person("Cindy", 67);
const person2 = new Person ("Bill", 84);

person1.greet();
person2.greet()