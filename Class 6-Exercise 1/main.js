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
    }

  user.fullName();

  // The arrow function inherents the scope of the nearest containing function that surrounds it.
