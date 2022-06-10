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


 // While loops

