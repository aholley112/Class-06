// Exercise 1
// Create three functions: one global, one as an object method, and an arrow function inside an object.
// Print the value of this inside each function.
// Discuss or note down the differences you observe in the value of this across the three scenarios.

function test()
{
   console.log("this");
}
test();

const user = {
  firstName: "Amanda",
  lastName: "Feely",
  fullName: function(){

  const arrowFunction = () => {
   console.log(this)
  console.log(this.firstName + " " +this.lastName)
       }

       arrowFunction();

      }

  user.fullName();

  // The arrow function inherents the scope of the nearest containing function that surrounds it.

 
  
 //Exercise 2
// Define a Person class with properties name and age.
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

 //Exercise 3
// Modify your Person class. The constructor should now accept and initialize name and age properties.
//Create two different Person instances with unique names and ages.

//My example accepted and initialized name and age properties.

class Person {
   constructor(name, age,) {
     this.name = name;
     this.age = age;
   }
   greet() {
     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
   };
 };
 const person1 = new Person("Amanda", 21);
 const person2 = new Person ("John", 34);

 person1.greet();
 person2.greet()

//Exercise 4

// Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
// Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.

class Person1 {
   constructor(name,age) {
      this.name = name;
      this.age = age;
   }
   greet
}

// Exercise 5
// Within your Person class, add getters and setters for the age property.
// Ensure with the setter that age can't be set to a negative value.
// Instantiate a Person object, try setting a negative age, and observe the results.

// Exercise 6
// Understand and implement private fields in classes.

// Instructions:

// Visit this repository.
// Click Use this template follow by Create a new repository.
// Give this repository a name of private fields in classes.
// Make sure this is a public repository.
// Read the readMe.md file for further instructions.

// Exercise #7
// Objective: Integrate multiple concepts: classes, methods, and private fields.

// Instructions:

// As a challenge, design a Library class. This class should be able to store book objects.
// For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
// The Library should feature methods that allow a user to add a book, remove a book, and list all books.
// Implement this system and run a series of operations, such as adding a book, listing books, etc.
