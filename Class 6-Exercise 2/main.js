
//Instructions: Define a Person class with properties name and age.
class Person {
    constructor(name, age,) {
      this.name = name;
      this.age = age;
    }
    //Add a method greet() to this class which outputs a greeting.

    greet() {
      console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);

    };
  };

  //Instantiate two different Person objects and invoke their greet methods.

  const person1 = new Person("Amanda", 21);
  const person2 = new Person ("John", 34);

  person1.greet();
  person2.greet()