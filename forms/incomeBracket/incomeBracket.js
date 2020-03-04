/*
//set income equal to 0
let income = 0

//button to go again
btnGoAgain.onclick=function(){
  location.reload()
}

//submit button and run function
btnSubmit.onclick = function() {
  income = Number(inptIncome.value)
    if (income < 30000){
        lblMessage.value = `With your income of $${income}, you are in a tax bracket of 8%.`
  }
    else if (income > 29999 && income < 100000){
        lblMessage.value=`With your income of $ ${income}, you are in a tax bracket of 15%.`
  }
    else lblMessage.value=`With your income of $ ${income}, you are in a tax bracket of 25%.`
  }
*/