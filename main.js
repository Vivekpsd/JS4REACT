// normal functions
function DoSomething() {
    console.log("Hello world");
}

// arrow functions
const Work = (name) => {
    console.log(name + " Working...");
}

DoSomething();
Work("Vivek");


//template literals
function tempLits(name) {
    console.log("My name is ${name}");
    console.log(`My name is ${name}`);
}
tempLits("Vivek");


// ternary operator
function getComponent() {
    let age = 18;
    const infoEle = document.getElementById("info");
    infoEle.innerHTML = age >= 18 ? (`<p>Voted</p>`) : (`<p>Not Voted</p>`);
}

//objects
const person = {
    name: "Vivek",
    age: 20,
    isMarried: false
}

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried

//destructuring...
const {name, age, isMarried} = person
console.log(`Person ${name} of age ${age} is ${isMarried ? `Married` : `Not Married`}`)

// when key has same name as value you are setting it to!
const model = "Asus"
const brand = {
    //model:model
    model
}
console.log(brand.model)

// Spread Operator
const person2 = {...person, name:"Meghna"}
console.log(`Person ${person2.name} of age ${person2.age} is ${person2.isMarried ? `Married` : `Not Married`}`)

// Spread Operator with array also..
const names = ["Vivek", "Pawan", "Kiran"]
const names2 = [...names, "Ankit"]
console.log(names2);

// ------------- Important Functions for JS Arrays [MAP, FILTER, REDUCE]--------------------

let fruits = ["Banana", "Apple", "Kiwi", "Mango"]

// forEach
// fruits.forEach((fruit) => {
//     fruit += "*"
//     console.log(fruit)
// })
// console.log(fruits)

// map
let newFruits = fruits.map((fruit) => {
    return fruit + "*"
})
console.log(newFruits)

// just example in jsx
// function getFruits() {
//     newFruits.map((fruit) => {
//         return <h1> {fruit} </h1>
//     })    
// }

// reduce
let smallFruits = fruits.map((fruit) => {
    return fruit.length <= 4 ? fruit : "";
})

console.log(smallFruits)