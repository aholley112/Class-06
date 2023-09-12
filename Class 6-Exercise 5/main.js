//Objective: Implement getters and setters for class properties.

// Instructions:

// Within your Person class, add getters and setters for the age property.
// Ensure with the setter that age can't be set to a negative value.
// Instantiate a Person object, try setting a negative age, and observe the results.

class Person {
    constructor(name, age,) {
      this.name = name;
      this.age = age;
    }

    getAge() {
        return this.age;
    }
    set age(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Age must be a positive number");
        }
        this._age = value;
    }
};
  
//This provides correct result
const person = new Person("Amanda", 54);
console.log(person)

//This pops up the error that age cannot be negative and must be positive.

//const person = new Person("Amanda", -54);
//console.log(person)
