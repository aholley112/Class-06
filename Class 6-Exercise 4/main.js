// Exercise #4
// Objective: Familiarize with static methods in classes.

// Instructions:

// Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }

    static info() {
        return 'This is a Person class.';
    }

    callInfo() {
        this.info();
    }
}

const staticPerson1 = new Person();
const staticPerson2 = new Person();

console.log(Person.info()); //Calling it like this prints "This is a Person class."
//Calling it from the instance gives an error. You have to call it from the class to get the correct result.