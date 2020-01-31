/*
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

const createDoctor = function (name, specialty, practiceAddress) {
    return {
        "name": name,
        "specialty": specialty,
        "practiceAddress": practiceAddress
    }
}

const drSally = createDoctor("sally", "oncologist", "123 Some Road")
console.log(drSally)

const drPepper = createDoctor("pepper", "refesh-ology", "456 Another Road")
console.log("drPepper", drPepper)

/*
 Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
 */

 const createPet = (name, breed) => {
     return {
         name: name,
         breed: breed
     };
 };

 const scrappy = createPet("scrappy", "mutt");
 console.log("scrappy", scrappy)

 const bowWowKennels = [
     createPet("scrappy", "mutt"),
     createPet("rambo", "tough"),
     createPet("steve", "human")
 ];

 console.log("bowWowKennels", bowWowKennels)