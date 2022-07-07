//document.getElementById('count').innerText = 50




// let myNumber = 22

// console.log(myNumber)

// let myAge = 21

// let myHumanDogRatio = 21

// let myDogAge = myAge * myHumanDogRatio

// console.log(myDogAge)

// let theSense = 50

// // let theSense = theSense + 100

// theSense = theSense + 100

// console.log(theSense)

// // let theSense = theSense - 25

// theSense = theSense - 25

// console.log(theSense)

// // let theSense = theSense - 70

// theSense = theSense + 70

// console.log(theSense)

// function increment() {
//     console.log("You click the button !")
// }

// let laps1 = 33
// let laps2 = 34
// let laps3 = 36

// function lapTime(){
//     let totalLapTime = laps1 + laps2 + laps3
//     console.log(totalLapTime)
// }

//adding the textContent is to give space to each dash
// lapTime()

// else if (dateString != dateToday){
//     console.log('Not Today')
// }
// dates

const dateToday = new Date();
console.log(dateToday)

const dateOld = new Date(1960, 9, 1);
console.log(dateOld)

const dateString = new Date('July 06, 2022 00:00:00');
console.log(dateString)

if (dateString === dateToday){
    console.log('It is my birthday !')
}else if (dateString === dateOld){
    console.log('Not Today')
}else{
    console.log('we meuuve')
}

let countPsg = document.getElementById("count-el")
console.log(countPsg)

let count = 0

function increment() {
    count = count + 1
    countPsg.innerText = count  
}

let saveEl = document.getElementById("save-el")
console.log(saveEl)

    function save() {
    let countStg = count + " - "
    saveEl.textContent += countStg
    countPsg.innerText = 0
    count = 0
    }

let saveSum = document.getElementById("save-sum")  
console.log(saveSum)  

console.log( + "save-el")

let message = "You have a tree new notifiations"

console.log(message)

 let name = "Oyindamola"
 let greeting = "Hi, my name is "

 let myGreeting = greeting + name

 console.log(myGreeting)

 alert(myGreeting)

 //Parameter and Arguement
//parameters
//parameters are placed in our functions t0 make it dynamic
//parameters are the word passed immediately after the function name ()

 function favGame(game){
    console.log(`My favorite game is ${game}`)
 }
 favGame("Candy Crush");
 favGame("Sonia"); 
 favGame("Temple Run");

 //Arguement
//is the invoking of words in the parenthesis after the function is been called
// how to insert multiple parameters separing them with commas

function ninjaTitle(name, weapon){
    console.log(`${name} uses the ${weapon}`)
}
ninjaTitle("Nikim", "Buzza");

// For Numbers
function remainder(num1, num2){
    console.log(num1 % num2);
}
remainder(180, 70);

// Example
function favFood(response){
    alert(`Your Fav food is ${response}`)
}

favFood()

if (alert != favFood()){
    alert("Please input your fav food...")
}else{
    console.log("Thank you !")
}
// More On Functions

//  const  {sumOfNumbers}  = assignment;
//  const maybe = sumOfNumbers === undefined ? test.skip : test;
 
// let sumOfNumbers = 0;

//  maybe('Challenge - 1 : my sumNumbers function can sum an array of numbers', () => {
     
    //  const numbers = [
    //      68,
    //      -68,
    //      27,
    //      94,
    //      72,
    //      -25,
    //      -51,
    //      32,
    //      10,
    //      64,
    //      -94,
    //      4,
    //      34,
    //      -86,
    //      90,
    //      81,
    //      20,
    //      -56,
    //      -91,
    //      -50
    //  ]; 
    //  //expect(sumOfNumbers(numbers)).toBe(75);

    //  for(let i = 0; i < numbers.length; i++){
    //    sumOfNumbers = sumOfNumbers + numbers[i]
    //  console.log(sumOfNumbers);
    //  }
     
//  });
//  console.log(maybe);

const assignment = require('../src/assignment.js');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {

    let countEvenNumbers = 0;

    const number = [
        17,
        0,
        67,
        41,
        49,
        21,
        1,
        86,
        76,
        2,
        54,
        14,
        93,
        84,
        14,
        77,
        35,
        7,
        29,
        64
    ]
    const even = [];

    number.forEach(numbers => {
      if (numbers % 2 === 0) {
        even.push(number);
      }
    });
    console.log(even);
   // expect(countEvenNumbers(numbers)).toBe(9);
});