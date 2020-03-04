/*
//asks user if they want to do average calculation or random multiplication
let calcChoice = prompt("Do you want want to do an average calculation or a random multiplication? (Enter average or multiplication) ")

//gets number from user
let number4 = Number(prompt("Please enter your number: "))

//function that calculates average of 3 numbers times square of first number
function calcAvgSquare(num1, num2, num3) {
   return ((num1 + num2 + num3)/3) * num1 * num1
}

//function that that takes 1 parameter and multiplies it with random number
function randomMultiply(num4, num5) {
   return  num4 * num5
}

//calls appropriate function
switch (calcChoice) {
  case 'average' :
    let averageSquare = calcAvgSquare(number1, number2, number3)
    alert(`The answer is ${averageSquare}.`)
    break
  case 'multiplication' :
    let number5 = Math.floor(Math.random() * 10)
    let multiplyAnswer = randomMultiply(number4, number5)
    alert(`The result of multiplying the random number ${number5} with ${number4} is ${multiplyAnswer }.`)
    break
  default :
    alert("Please enter either average or multiplication.")
}
*/