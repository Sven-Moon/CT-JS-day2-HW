//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const { process_params } = require("express/lib/router")

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [{
    oberwise: "Chocolate",
    dunkin: "Vanilla",
    culvers: "All of them",
    mcDonalds: "Sham-rock-shake",
    cupids_candies: "Chocolate Malt"
  }]
}
console.log('----Exercise 1 ----');
function favs(item) {
  var printout = ''
  for (let [k, v] of Object.entries(item)) {
    printout += `\nFavorite ${k}: `
    if (typeof v === 'string') printout += v
    if (Array.isArray(v)) {
      if (typeof v[0] == 'string') printout += v.join(", ")
      else if (typeof v[0] == 'object') {
        for (let [key, val] of Object.entries(v[0]))
          printout += `\n  ${key}: ${val}`

      }
    }
  }

  return printout
}
console.log(favs(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

console.log('\n\n----Exercise 2 ----');
// Create our Person Prototype
class Person {
  constructor(name = 'terrance the dough boy', age = 40) {
    this.name = this.titleCase(name)
    this.age = age
  }
  makeOlder(increment = 1) {
    this.age += increment
  }
  printInfo = () => {
    console.log(`${this.name} is ${this.age} years old`);
  }
  titleCase(words) {
    words = words.split(" ").map(word =>
      word.charAt(0).toUpperCase()
      + word.slice(1).toLowerCase()
    )
    return words.join(' ')
  }
}
jo = new Person()
ruth = new Person('ruth', 20)
ruth.makeOlder()
ruth.makeOlder(2)
jo.printInfo()
ruth.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
console.log('\n\n----Exercise 3 ----');
let bigWord = (word) => {
  return new Promise((resolve, reject) => {
    if (word.length > 10) resolve("Big word")
    if (word.length < 10) resolve("Small Number")
    else reject("I don't know what to do with this string")
  })
}

async function sendTheWord(word) {
  await bigWord(word)
    .then((resp => console.log(`Sending '${word}': ${resp}`)))
    .catch((resp) => console.log(`Rejected: ${resp}`))
}

sendTheWord('tacos dance')
sendTheWord('tacos jump')
sendTheWord('tacos fly')