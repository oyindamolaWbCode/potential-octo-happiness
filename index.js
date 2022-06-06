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

// lapTime()

let countPsg = document.getElementById("count-el")
console.log(countPsg)

let count = 0

function increment() {
    count = count + 1
    countPsg.innerText = count  
}

function save(){

    console.log(count)

}

save()

let message = "You have a tree new notifiations"

console.log(message)