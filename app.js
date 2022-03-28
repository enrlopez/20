
function askName() {
    var name = prompt ("whats your name:")
    return name
}

function temperature() {
  var temp = prompt ('What is the temp')
  return temp
}

function CtoF(x) {
    var newtemp = x * 9 / 5 * 32
    return newtemp
}

function FtoC(x) {
  var newtemp = x - 32 * 5 / 9
  return newtemp
}

function daddyFunc(x){
  var choice = prompt ("what do you want to convert C to F or F to C?")
  while (choice != "C to F" && choice !=  "F to C" ) {
  choice = prompt ("only enter C to F or F to C?")
  }
  if (choice == "C to F" ) {
    alert(`hi ${x} the temperature converted from ${choice} ${CtoF} `)
  } else if ("F to C") {
    ${FtoC}   
  } 
} 
